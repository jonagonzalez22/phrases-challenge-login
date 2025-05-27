'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export type ProtectedRouteProps = {};

const ProtectedRoute: React.FC<ProtectedRouteProps> = () => {
	const location = useLocation();

	const { isLoggedIn } = useSelector((state: any) => state.auth);

	if (!isLoggedIn && location.pathname !== '/login') {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
