import React from 'react';
import './Button.css';

export type ButtonProps = {
	id?: string;
	label: string;
	onClick?: () => void;
	disabled?: boolean;
	variant?: 'primary' | 'secondary' | 'danger' | 'outline';
};

const Button: React.FC<ButtonProps> = ({
	id,
	label,
	onClick,
	disabled = false,
	variant = 'primary',
}) => {
	return (
		<button
			id={id}
			className={`button ${disabled ? variant + ' disabled' : variant}`}
			onClick={onClick}
			disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
