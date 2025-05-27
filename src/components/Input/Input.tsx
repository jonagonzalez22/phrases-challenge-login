import React from 'react';
import './Input.css';
import { Search } from 'lucide-react';

export type InputProps = {
	id?: string;
	name?: string;
	disabled?: boolean;
	placeholder?: string;
	type?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	withIcon?: boolean;
	iconType?: string;
};

type IconsType = {
	Search: React.ReactNode;
};

const Icons = {
	Search: <Search size={16} />,
};

const Input: React.FC<InputProps> = ({
	disabled,
	placeholder,
	type,
	value,
	onChange,
	withIcon,
	iconType,
	id,
}) => {
	return (
		<div className='input-container'>
			<input
        id= {id}
				type={type}
				disabled={disabled}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={`input ${disabled ? 'disabled' : ''}`}
			/>
			{withIcon && (
				<div className='icon'>
					{Icons[iconType as keyof IconsType] || Icons.Search}
				</div>
			)}
		</div>
	);
};

export default Input;
