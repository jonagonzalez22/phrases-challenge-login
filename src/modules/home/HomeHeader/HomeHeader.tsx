import React, { useState } from 'react';
import './HomeHeader.css';
import { IconButton } from '../../../components/IconButton';
import { ModalAddPhrase } from '../ModalAddPhrase';

export type HomeHeaderProps = {
	title?: string;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ title = '' }) => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpenCloseModal = (): void => {
		setOpenModal(!openModal);
	};
	return (
		<>
			<ModalAddPhrase open={openModal} handleClose={handleOpenCloseModal} />
			<header className='home-header'>
				<h1 className='home-header-title'>{title}</h1>
				<IconButton
					icon='add'
					variant='primary-outline'
					onClick={handleOpenCloseModal}
				/>
			</header>
		</>
	);
};

export default HomeHeader;
