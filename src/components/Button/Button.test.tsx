import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import Button from './Button';

afterEach(() => {
	cleanup();
});

describe('Button', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Button label='Click me' />);
		expect(baseElement).toBeTruthy();
	});

	it('should render the correct label', () => {
		const { getByText } = render(<Button label='Click me' />);
		expect(getByText('Click me')).toBeInTheDocument();
	});

	it('should call onClick when clicked', () => {
		const handleClick = jest.fn();
		const { getByRole } = render(
			<Button label='Click me' onClick={handleClick} />
		);
		fireEvent.click(getByRole('button'));
		expect(handleClick).toHaveBeenCalled();
	});
	it('should be disabled when the disabled prop is true', () => {
		const { getByRole } = render(<Button label='Click me' disabled />);
		expect(getByRole('button')).toBeDisabled();
	});
});
