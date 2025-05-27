'use client';
import React from 'react';
import './Login.css';
import { LoginForm } from '../../modules/login/LoginForm';

export type LoginProps = {
	// types...
};

const Login: React.FC<LoginProps> = ({}) => {
	return (
		<article className='main-login-container'>
			<LoginForm />
		</article>
	);
};

export default Login;
