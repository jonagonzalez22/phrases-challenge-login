'use client';
import React from 'react';
import './Cards.css';
import { useCreatePhraseContext } from '../../../context/createPhrasesContext';
import { Card } from '../../../components/Card';

export type CardsProps = {
	// types...
};

const EmptyCard = () => {
	return (
		<div className='empty-card'>
			<img src='/src/assets/no-phrases.svg' alt='No hay frases' width={250} />
			<p>No se encontraron frases</p>
		</div>
	);
};

const Cards: React.FC<CardsProps> = ({}) => {
	const { filteredPhrases, removePhrase } = useCreatePhraseContext();

	return (
		<div className='cards-container'>
			{filteredPhrases.length > 0 ? (
				filteredPhrases.map((phrase, index) => (
					<Card
						key={index}
						cardText={phrase}
						onClick={() => {
							removePhrase(phrase);
						}}
					/>
				))
			) : (
				<EmptyCard />
			)}
		</div>
	);
};

export default Cards;
