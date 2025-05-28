import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import { Button } from '../Button';

export type ModalProps = {
	open: boolean;
	disablePrimaryButton?: boolean;
	disableSecondaryButton?: boolean;
	handleClose: () => void;
	handlePrimaryButton: () => void;
	handleSecondarybutton: () => void;
	bodyModal?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
	open,
	handleClose,
	bodyModal,
	handlePrimaryButton,
	handleSecondarybutton,
	disablePrimaryButton = false,
	disableSecondaryButton = false,
}) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'>
			<DialogTitle id='alert-dialog-title'>Agregar Frase</DialogTitle>
			<DialogContent>{bodyModal}</DialogContent>
			<DialogActions>
				<Button
					id='secondary-button'
					label='Cerrar'
					onClick={handleSecondarybutton}
					variant='danger'
					disabled={disableSecondaryButton}
				/>
				<Button
					id='primary-button'
					label='Agregar'
					onClick={handlePrimaryButton}
					variant='primary'
					disabled={disablePrimaryButton}
				/>
			</DialogActions>
		</Dialog>
	);
};

export default Modal;
