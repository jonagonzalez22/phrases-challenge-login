'use client';
import React from 'react';
import {
	Button,
	Field,
	Fieldset,
	Stack,
	Input,
	Box,
	Heading,
	Text,
	InputGroup,
} from '@chakra-ui/react';
import { LuUser, LuLock } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import './LoginForm.css';
import { login } from '../../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from '../../../components/ui/password-input';
import { useColorModeValue } from '../../../components/ui/color-mode';

export type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const bgColor = useColorModeValue(
		'rgba(255, 255, 255, 0.25)',
		'rgba(0, 0, 20, 0.4)'
	);
	const borderColor = useColorModeValue(
		'rgba(255, 255, 255, 0.3)',
		'rgba(255, 255, 255, 0.1)'
	);
	const textColor = useColorModeValue('gray.800', 'white');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget as HTMLFormElement);
		const data = {
			username: formData.get('username') as string,
			password: formData.get('password') as string,
		};
		dispatch(login({ name: data.username }));
		navigate('/home');
	};

	return (
		<Box
			as='section'
			minH='100vh'
			display='flex'
			alignItems='center'
			justifyContent='center'
			bg={useColorModeValue('gray.50', 'gray.900')}
			p={4}>
			<Box
				as='form'
				onSubmit={handleSubmit}
				display='flex'
				flexDirection='column'
				gap={6}
				w='100%'
				maxW='md'
				p={8}
				background={bgColor}
				backdropFilter='blur(12px)'
				border={`1px solid ${borderColor}`}
				borderRadius='xl'
				boxShadow={useColorModeValue(
					'0 8px 32px rgba(31, 38, 135, 0.15)',
					'0 8px 32px rgba(0, 0, 0, 0.3)'
				)}
				color={textColor}>
				<Stack gap={1} textAlign='center'>
					<Heading size='lg' fontWeight='semibold'>
						Iniciar sesión
					</Heading>
					<Text color={useColorModeValue('gray.600', 'gray.300')}>
						Ingresa tus credenciales para continuar
					</Text>
				</Stack>

				<Fieldset.Root size='lg'>
					<Fieldset.Content>
						<Field.Root>
							<Field.Label htmlFor='username'>Usuario</Field.Label>
							<InputGroup
								startElement={
									<LuUser size={20} style={{ marginLeft: '10px' }} />
								}>
								<Input
									id='username'
									name='username'
									type='text'
									placeholder='username'
								/>
							</InputGroup>
						</Field.Root>

						<Field.Root className='custom-password-field'>
							<Field.Label htmlFor='password'>Contraseña</Field.Label>

							<PasswordInput
								id='password'
								name='password'
								type='password'
								placeholder='password'
								required
								paddingStart={10}
							/>
							<LuLock size={20} className='icon-password' />
						</Field.Root>
					</Fieldset.Content>
				</Fieldset.Root>

				<Button
					type='submit'
					colorScheme='teal'
					size='lg'
					width='full'
					mt={2}
					_hover={{
						transform: 'translateY(-2px)',
						boxShadow: 'lg',
					}}
					transition='all 0.2s'>
					Iniciar sesión
				</Button>
			</Box>
		</Box>
	);
};

export default LoginForm;
