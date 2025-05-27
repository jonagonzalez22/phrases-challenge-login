import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode,
} from 'react';

interface ICreatePhrasesContext {
	phrases: string[];
	filteredPhrases: string[];
	addNewPhrase: (newPhrase: string) => void;
	removePhrase: (keyPhraseToRemove: string) => void;
	filterPhrases: (searchTerm: string) => void;
}

interface CreatePhrasesProviderProps {
	children: ReactNode;
}

const CreatePhrasesContext = createContext<ICreatePhrasesContext>(
	{} as ICreatePhrasesContext
);

export const CreatePhrasesProvider = ({
	children,
}: CreatePhrasesProviderProps) => {
	const [phrases, setPhrases] = useState<string[]>([]);

	const [filteredPhrases, setFilteredPhrases] = useState<string[]>([]);

	const addNewPhrase = (newPhrase: string): void => {
		setPhrases((prevPhrases) => {
			const updatedPhrases = [...prevPhrases, newPhrase];
			localStorage.setItem('phrases', JSON.stringify(updatedPhrases));
			return updatedPhrases;
		});
	};

	const removePhrase = (keyPhraseToRemove: string): void => {
		const indexToRemove = phrases.indexOf(keyPhraseToRemove);

		setPhrases((prevPhrases) => {
			const updatedPhrases = prevPhrases.filter((_, i) => i !== indexToRemove);
			localStorage.setItem('phrases', JSON.stringify(updatedPhrases));
			return updatedPhrases;
		});
	};

	const getPhrasesFromLocalStorage = (): void => {
		const phrasesFromLocalStorage = localStorage.getItem('phrases');
		if (phrasesFromLocalStorage) {
			const parsedPhrases = JSON.parse(phrasesFromLocalStorage);
			setPhrases(parsedPhrases);
			setFilteredPhrases(parsedPhrases);
		}
	};

	const filterPhrases = (searchTerm: string): void => {
		const filtered = phrases.filter((phrase) =>
			phrase.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredPhrases(filtered);
	};

	useEffect(() => {
		getPhrasesFromLocalStorage();
	}, []);

	useEffect(() => {
		setFilteredPhrases(phrases);
	}, [phrases]);

	const values: ICreatePhrasesContext = {
		phrases,
		addNewPhrase,
		removePhrase,
		filteredPhrases,
		filterPhrases,
	};
	return (
		<CreatePhrasesContext.Provider value={values}>
			{children}
		</CreatePhrasesContext.Provider>
	);
};

export const useCreatePhraseContext = (): ICreatePhrasesContext => {
	const context = useContext(CreatePhrasesContext);
	if (!context) {
		throw new Error(
			'useCreatePhraseContext must be used within a CreatePhrasesProvider'
		);
	}
	return context;
};
