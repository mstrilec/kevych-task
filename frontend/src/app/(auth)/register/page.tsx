'use client'

import { useAuth } from '@/hooks/useAuth'
import { Button, Container, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RegisterPage() {
	const { register, error, isAuthenticated } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')
	const router = useRouter()

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		await register(email, password, name)
		if (isAuthenticated()) {
			router.push('trains')
		}
	}

	return (
		<Container maxWidth='sm'>
			<Typography variant='h4' gutterBottom align='center' color='black'>
				Sign in
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label='Name'
					fullWidth
					margin='normal'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
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
					Register
				</Button>
			</form>
			<Button
				sx={{ mt: '25px' }}
				onClick={() => router.push('login')}
				variant='outlined'
				color='primary'
				fullWidth
			>
				Log in
			</Button>
		</Container>
	)
}
