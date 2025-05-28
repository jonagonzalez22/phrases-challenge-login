import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
/* import { MemoryRouter } from 'react-router-dom'; */
import { Provider as ChacraProvider } from '../../../components/ui/provider';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';

describe('LoginForm', () => {
	it('should render successfully', () => {
		const { baseElement } = render(
			<ChacraProvider>
				<Provider store={store}>
					<BrowserRouter>
						<LoginForm />
					</BrowserRouter>
				</Provider>
			</ChacraProvider>
		);

		expect(baseElement).toBeTruthy();
	});
});
