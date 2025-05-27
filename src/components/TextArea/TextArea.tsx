'use client';
import React from 'react';
import './TextArea.css';

export type TextAreaProps = {
	id?: string;
	placeholder?: string;
	value?: string;
	width?: number;
	height?: number;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea: React.FC<TextAreaProps> = ({
	id,
	placeholder,
	value,
	width,
	height,
	onChange,
}) => {
	return (
		<textarea
			id={id}
			placeholder={placeholder}
			className='textarea'
			onChange={onChange}
			style={{
				width: width ? `${width}px` : '100%',
				height: height ? `${height}px` : '100%',
			}}>
			{value}
		</textarea>
	);
};

export default TextArea;
