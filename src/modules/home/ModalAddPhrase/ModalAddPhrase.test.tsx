import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

beforeEach(() => {
	cleanup();
});
// Mocks
const addNewPhraseMock = jest.fn();
const handleCloseMock = jest.fn();

jest.mock('../../../context/createPhrasesContext', () => ({
	useCreatePhraseContext: () => ({
		addNewPhrase: addNewPhraseMock,
	}),
}));

jest.mock('../../../components/TextArea', () => ({
	TextArea: ({ value, onChange, id }: any) => (
		<textarea id={id} value={value} onChange={onChange} />
	),
}));

// Modal Mock
jest.mock('../../../components/Modal', () => ({
	Modal: ({
		open,
		bodyModal,
		handlePrimaryButton,
		handleSecondarybutton,
		disablePrimaryButton,
	}: any) =>
		open ? (
			<div data-testid='modal'>
				{bodyModal}
				<button onClick={handleSecondarybutton}>Cerrar</button>
				<button onClick={handlePrimaryButton} disabled={disablePrimaryButton}>
					Agregar
				</button>
			</div>
		) : null,
}));

import ModalAddPhrase from './ModalAddPhrase';

describe('ModalAddPhrase', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should not render when open is false', () => {
		render(<ModalAddPhrase open={false} handleClose={handleCloseMock} />);
		expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
	});

	it('should render modal with textarea when open is true', () => {
		render(<ModalAddPhrase open={true} handleClose={handleCloseMock} />);
		expect(screen.getByTestId('modal')).toBeInTheDocument();
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should disable "Agregar" button when textarea is empty', () => {
		render(<ModalAddPhrase open={true} handleClose={handleCloseMock} />);
		expect(screen.getByText('Agregar')).toBeDisabled();
	});

	it('should enable "Agregar" button when text is entered and call handlers', () => {
		render(<ModalAddPhrase open={true} handleClose={handleCloseMock} />);
		const textArea = screen.getByRole('textbox');
		const agregarBtn = screen.getByText('Agregar');

		fireEvent.change(textArea, { target: { value: 'Nueva frase' } });

		expect(agregarBtn).not.toBeDisabled();

		fireEvent.click(agregarBtn);

		expect(addNewPhraseMock).toHaveBeenCalledWith('Nueva frase');
		expect(handleCloseMock).toHaveBeenCalled();
	});
});
