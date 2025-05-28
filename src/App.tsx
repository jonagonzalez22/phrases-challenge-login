import { CreatePhrasesProvider } from './context/createPhrasesContext';
import { Provider as ChacraProvider } from '@/components/ui/provider';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
	return (
		<main>
			<ChacraProvider>
				<Provider store={store}>
					<CreatePhrasesProvider>
						<RouterProvider router={router} />
					</CreatePhrasesProvider>
				</Provider>
			</ChacraProvider>
		</main>
	);
}

export default App;
