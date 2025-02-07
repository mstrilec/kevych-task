'use client'

import TrainForm from '@/components/TrainForm'
import { useAuth } from '@/hooks/useAuth'
import api from '@/services/api'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditTrainPage() {
	const { isAuthenticated } = useAuth()
	const router = useRouter()
	const { id } = useParams()
	const [train, setTrain] = useState(null)

	const authCheck = isAuthenticated()

	useEffect(() => {
		const fetchTrain = async () => {
			try {
				const response = await api.get(`/trains/${id}`)
				setTrain(response.data)
			} catch (err) {
				console.error('Помилка при завантаженні поїзда', err)
			}
		}

		if (!authCheck) {
			router.push('/login')
		} else {
			fetchTrain()
		}
	}, [id, router, authCheck])

	const handleUpdateTrain = async (data: {
		[key: string]: string | number | boolean
	}) => {
		try {
			await api.put(`/trains/${id}`, data)
			router.push('/trains')
		} catch (err) {
			console.error('Помилка при оновленні поїзда', err)
		}
	}

	if (!isAuthenticated() || !train) {
		return <p>Завантаження...</p>
	}

	return <TrainForm initialData={train} onSubmit={handleUpdateTrain} />
}
