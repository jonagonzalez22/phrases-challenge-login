'use client';
import React from 'react';
import './Card.css';
import { IconButton } from '../IconButton';

export type CardProps = {
	cardText?: string;
	onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ cardText, onClick }) => {
	return (
		<div className='card'>
			<section>{cardText}</section>
			<div className='card-buttons-container'>
				<IconButton
					icon='delete'
					variant='danger-without-outline'
					onClick={onClick}
				/>
			</div>
		</div>
	);
};

export default Card;
