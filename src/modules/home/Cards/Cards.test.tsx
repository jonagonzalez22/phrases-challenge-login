import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import '@testing-library/jest-dom';
import Cards from './Cards';
import { useCreatePhraseContext } from '../../../context/createPhrasesContext';

//Context Mock
jest.mock('../../../context/createPhrasesContext', () => ({
	useCreatePhraseContext: jest.fn(),
}));

describe('Cards', () => {
	it('should render a list of Card components when filteredPhrases has items', () => {
		const mockRemove = jest.fn();
		(useCreatePhraseContext as jest.Mock).mockReturnValue({
			filteredPhrases: ['Frase 1', 'Frase 2'],
			removePhrase: mockRemove,
		});

		render(<Cards />);

		expect(screen.getByText('Frase 1')).toBeInTheDocument();
		expect(screen.getByText('Frase 2')).toBeInTheDocument();
	});

	it('should render the EmptyCard when filteredPhrases is empty', () => {
		const mockRemove = jest.fn();
		(useCreatePhraseContext as jest.Mock).mockReturnValue({
			filteredPhrases: [],
			removePhrase: mockRemove,
		});

		render(<Cards />);

		expect(screen.getByText('No se encontraron frases')).toBeInTheDocument();
	});

	it('should call removePhrase when a Card is clicked', () => {
		const mockRemove = jest.fn();
		(useCreatePhraseContext as jest.Mock).mockReturnValue({
			filteredPhrases: ['Frase a eliminar'],
			removePhrase: mockRemove,
		});

		render(<Cards />);
		const deleteButton = screen.getByRole('button');
		fireEvent.click(deleteButton);

		expect(mockRemove).toHaveBeenCalledWith('Frase a eliminar');
	});
});
