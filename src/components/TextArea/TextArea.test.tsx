import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextArea from './TextArea';

describe('TextArea', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<TextArea />);

		expect(baseElement).toBeTruthy();
	});

	it('should call onChange when textarea value changes', () => {
		const handleChange = jest.fn();
		const { getByRole } = render(<TextArea onChange={handleChange} />);
		fireEvent.change(getByRole('textbox'), { target: { value: 'new value' } });
		expect(handleChange).toHaveBeenCalled();
	});
});
