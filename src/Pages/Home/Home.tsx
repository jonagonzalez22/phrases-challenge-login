'use client';
import React from 'react';
import './Home.css';
import { SearchBar } from '../../modules/home/SearchBar';
import { HomeHeader } from '../../modules/home/HomeHeader';
import { Cards } from '../../modules/home/Cards';
import withTitle from '../../components/hoc/homeHeaderHoc';

const HomeHeaderWithTitle = withTitle(HomeHeader, 'Mis Frases');

const Home: React.FC = () => {
	return (
		<article className='main-container-home'>
			<HomeHeaderWithTitle />
			<SearchBar />
			<Cards />
		</article>
	);
};

export default Home;
