import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import IconButton from './IconButton';

afterEach(() => {
	cleanup();
});

describe('IconButton', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<IconButton icon='Search' />);

		expect(baseElement).toBeTruthy();
	});
	it('should call onClick when clicked', () => {
		const handleClick = jest.fn();
		const { getByRole } = render(
			<IconButton icon='Search' onClick={handleClick} />
		);
		fireEvent.click(getByRole('button'));
		expect(handleClick).toHaveBeenCalled();
	});
	it('should be disabled when the disabled prop is true', () => {
		const { getByRole } = render(<IconButton icon='Search' disabled />);
		expect(getByRole('button')).toBeDisabled();
	});
});
