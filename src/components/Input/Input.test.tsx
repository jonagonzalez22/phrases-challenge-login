import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import Input from './Input';

afterEach(() => {
	cleanup();
});

describe('Input', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Input />);
		expect(baseElement).toBeTruthy();
	});

	it('should be disabled when disabled prop is true', () => {
		const { getByRole } = render(<Input disabled />);
		expect(getByRole('textbox')).toBeDisabled();
	});

	it('should render the icon when withIcon is true', () => {
		const { container } = render(<Input withIcon iconType='Search' />);
		expect(container.querySelector('.icon')).toBeInTheDocument();
	});

	it('should call onChange when input value changes', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(<Input onChange={handleChange} />);
		fireEvent.change(getByRole('textbox'), { target: { value: 'new value' } });
		expect(handleChange).toHaveBeenCalled();
	});
});
