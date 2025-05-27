import React from 'react';
import './IconButton.css';
import { Plus, Search, Trash2 } from 'lucide-react';

export type IconButtonProps = {
	disabled?: boolean;
	icon: 'Search' | 'add' | 'delete';
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	variant?:
		| 'primary'
		| 'secondary'
		| 'danger'
		| 'primary-outline'
		| 'secondary-outline'
		| 'danger-outline'
		| 'danger-without-outline';
};

type IconsType = {
	Search: React.ReactNode;
	add: React.ReactNode;
	delete: React.ReactNode;
};

const Icons: IconsType = {
	Search: <Search size={16} />,
	add: <Plus size={16} />,
	delete: <Trash2 size={16} />,
};

const IconButton: React.FC<IconButtonProps> = ({
	disabled = false,
	icon,
	onClick,
	variant,
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={`iconbutton ${variant}`}>
			{Icons[icon as keyof IconsType]}
		</button>
	);
};

export default IconButton;
