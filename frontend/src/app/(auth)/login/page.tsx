'use client'

import { useAuth } from '@/hooks/useAuth'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
	const { login, error, isAuthenticated } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		await login(email, password)
		if (isAuthenticated()) {
			router.push('trains')
		}
	}

	return (
		<Container maxWidth='sm'>
			<Typography variant='h4' gutterBottom align='center' color='black'>
				Login
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label='Email'
					fullWidth
					margin='normal'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<TextField
					label='Password'
					type='password'
					fullWidth
					margin='normal'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				{error && <Typography color='error'>{error}</Typography>}
				<Button type='submit' variant='contained' color='primary' fullWidth>
					Login
				</Button>
			</form>
			<Button
				sx={{ mt: '25px' }}
				onClick={() => router.push('register')}
				variant='outlined'
				color='primary'
				fullWidth
			>
				Sign in
			</Button>
		</Container>
	)
}
