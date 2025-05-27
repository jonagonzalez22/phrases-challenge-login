import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Home } from '@/Pages/Home';
import { Login } from '@/Pages/Login';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <div>Error Page</div>,
		element: <ProtectedRoute />,
		children: [
			{
				index: true,
				element: <Login />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'home',
				element: <Home />,
			},
		],
	},
]);
