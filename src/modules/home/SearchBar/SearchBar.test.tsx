jest.mock('../../../context/createPhrasesContext', () => ({
	useCreatePhraseContext: jest.fn(),
}));

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';
import { useCreatePhraseContext } from '../../../context/createPhrasesContext';

describe('SearchBar', () => {
	it('should render successfully', () => {
		(useCreatePhraseContext as jest.Mock).mockReturnValue({
			filterPhrases: jest.fn(),
		});

		const { baseElement } = render(<SearchBar />);
		expect(baseElement).toBeTruthy();
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should call filterPhrases when input value changes', () => {
		const filterPhrasesMock = jest.fn();

		(useCreatePhraseContext as jest.Mock).mockReturnValue({
			filterPhrases: filterPhrasesMock,
		});

		render(<SearchBar />);
		const input = screen.getByRole('textbox');

		fireEvent.change(input, { target: { value: 'nueva frase' } });

		expect(filterPhrasesMock).toHaveBeenCalledWith('nueva frase');
		expect(filterPhrasesMock).toHaveBeenCalledTimes(1);
	});
});
