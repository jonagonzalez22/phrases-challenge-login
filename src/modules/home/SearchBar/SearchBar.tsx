'use client';
import React from 'react';
import './SearchBar.css';
import { Input } from '../../../components/Input';
import { useCreatePhraseContext } from '../../../context/createPhrasesContext';

const SearchBar: React.FC = () => {
	const { filterPhrases } = useCreatePhraseContext();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		filterPhrases(e.target.value);
	};

	return (
		<section className='searchbar-container'>
			<Input type='text' withIcon onChange={handleChange} />
		</section>
	);
};

export default SearchBar;
