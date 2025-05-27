import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import Card from './Card';

afterEach(() => {
	cleanup();
});

describe('Card', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Card />);
		expect(baseElement).toBeTruthy();
	});

	it('should render the cardText when provided', () => {
		const text = 'Hello, this is a card!';
		const { getByText } = render(<Card cardText={text} />);
		expect(getByText(text)).toBeInTheDocument();
	});

	it('should call onClick when IconButton is clicked', () => {
		const handleClick = jest.fn();
		const { getByRole } = render(<Card onClick={handleClick} />);
		const button = getByRole('button');
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
