import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomeHeader from './HomeHeader';

jest.mock('../ModalAddPhrase', () => ({
	ModalAddPhrase: ({ open }: { open: boolean }) => {
		return open ? <div data-testid='modal'>Modal Abierto</div> : null;
	},
}));

describe('HomeHeader', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<HomeHeader />);

		expect(baseElement).toBeTruthy();
	});

	it('should render the title and button', () => {
		render(<HomeHeader title='Mis Frases' />);

		expect(screen.getByText('Mis Frases')).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('should open modal when button is clicked', () => {
		render(<HomeHeader />);

		expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole('button'));

		expect(screen.getByTestId('modal')).toBeInTheDocument();
	});
});
