import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import Modal from './Modal';

beforeEach(() => {
	cleanup();
});
describe('Modal', () => {
	it('should render successfully when open is true', () => {
		const mockFn = jest.fn();

		const { getByText } = render(
			<Modal
				open={true}
				handleClose={mockFn}
				handlePrimaryButton={mockFn}
				handleSecondarybutton={mockFn}
				bodyModal={<div>Test content</div>}
			/>
		);

		expect(getByText('Agregar Frase')).toBeInTheDocument();
		expect(getByText('Cerrar')).toBeInTheDocument();
		expect(getByText('Agregar')).toBeInTheDocument();
		expect(getByText('Test content')).toBeInTheDocument();
	});
	it('should disable the primary button when disablePrimaryButton is true', () => {
		const mockFn = jest.fn();

		const { getByText } = render(
			<Modal
				open={true}
				handleClose={mockFn}
				handlePrimaryButton={mockFn}
				handleSecondarybutton={mockFn}
				disablePrimaryButton={true}
			/>
		);

		expect(getByText('Agregar')).toBeDisabled();
	});
	it('should call handlePrimaryButton and handleSecondarybutton when buttons are clicked', () => {
		const handlePrimary = jest.fn();
		const handleSecondary = jest.fn();

		const { getByText } = render(
			<Modal
				open={true}
				handleClose={() => {}}
				handlePrimaryButton={handlePrimary}
				handleSecondarybutton={handleSecondary}
			/>
		);

		fireEvent.click(getByText('Agregar'));
		fireEvent.click(getByText('Cerrar'));

		expect(handlePrimary).toHaveBeenCalled();
		expect(handleSecondary).toHaveBeenCalled();
	});
});
