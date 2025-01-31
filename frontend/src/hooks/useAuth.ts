import { useState } from 'react'
import api from '../services/api'

export const useAuth = () => {
	const [error, setError] = useState<string | null>(null)

	const login = async (email: string, password: string) => {
		try {
			const response = await api.post('/auth/login', { email, password })
			localStorage.setItem('token', response.data.access_token)
			setError(null)
		} catch (err) {
			console.log(err)
			setError('Невірний email або пароль')
		}
	}

	const register = async (email: string, password: string, name?: string) => {
		try {
			const response = await api.post('/auth/register', {
				email,
				password,
				name,
			})
			localStorage.setItem('token', response.data.access_token)
			setError(null)
		} catch (err) {
			console.log(err)
			setError('Помилка реєстрації')
		}
	}

	const logout = () => {
		localStorage.removeItem('token')
	}

	const isAuthenticated = () => !!localStorage.getItem('token')

	return { login, register, logout, error, isAuthenticated }
}
