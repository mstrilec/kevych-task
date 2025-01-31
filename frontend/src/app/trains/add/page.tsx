'use client'

import TrainForm from '@/components/TrainForm'
import { useAuth } from '@/hooks/useAuth'
import api from '@/services/api'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AddTrainPage() {
	const { isAuthenticated } = useAuth()
	const router = useRouter()

	useEffect(() => {
		if (!isAuthenticated()) {
			router.push('/login')
		}
	}, [isAuthenticated, router])

	const handleCreateTrain = async (data: any) => {
		try {
			await api.post('/trains', data)
			router.push('/trains')
		} catch (err) {
			console.error('Помилка при додаванні поїзда', err)
		}
	}

	if (!isAuthenticated()) {
		return null
	}

	return <TrainForm onSubmit={handleCreateTrain} />
}
