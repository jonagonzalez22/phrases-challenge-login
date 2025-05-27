import React, { useEffect, useState } from 'react';
import './ModalAddPhrase.css';
import { Modal } from '../../../components/Modal';
import { TextArea } from '../../../components/TextArea';
import { useCreatePhraseContext } from '../../../context/createPhrasesContext';

export type ModalAddPhraseProps = {
	open: boolean;
	handleClose: () => void;
};

export type BodyModalProps = {
	textAreaValue: string;
	setTextAreaValue: React.Dispatch<React.SetStateAction<string>>;
};

const BodyModal: React.FC<BodyModalProps> = ({
	textAreaValue,
	setTextAreaValue,
}) => {
	const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaValue(e.target.value);
	};

	return (
		<TextArea
			id='textarea-add-phrase'
			width={300}
			height={150}
			value={textAreaValue}
			onChange={handleTextAreaChange}
		/>
	);
};

const ModalAddPhrase: React.FC<ModalAddPhraseProps> = ({
	open,
	handleClose,
}) => {
	const { addNewPhrase } = useCreatePhraseContext();

	const [textAreaValue, setTextAreaValue] = useState('');

	const saveNewPhrase = () => {
		addNewPhrase(textAreaValue);
		handleClose();
		setTextAreaValue('');
	};
	useEffect(() => {
		if (open) {
			setTextAreaValue('');
		}
	}, [open]);
	return (
		<Modal
			open={open}
			handleClose={handleClose}
			bodyModal={
				<BodyModal
					textAreaValue={textAreaValue}
					setTextAreaValue={setTextAreaValue}
				/>
			}
			handlePrimaryButton={saveNewPhrase}
			disablePrimaryButton={textAreaValue.length === 0}
			handleSecondarybutton={handleClose}
		/>
	);
};

export default ModalAddPhrase;
