'use client'

import api from '@/services/api'
import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TableSortLabel,
	TextField,
} from '@mui/material'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ITrain {
	id: number
	name: string
	departure_time: string
	arrival_time: string
	destination: string
	status: string
}

export default function TrainList() {
	const [trains, setTrains] = useState<ITrain[]>([])
	const [sortConfig, setSortConfig] = useState<{
		key: keyof ITrain
		direction: 'asc' | 'desc'
	} | null>(null)
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		const fetchTrains = async () => {
			const response = await api.get('/trains')
			setTrains(response.data)
		}
		fetchTrains()
	}, [])

	const handleDelete = async (id: number) => {
		try {
			await api.delete(`/trains/${id}`)
			setTrains(trains.filter(train => train.id !== id))
		} catch (error) {
			console.error('Error deleting train:', error)
		}
	}

	const handleSort = (key: keyof ITrain) => {
		let direction: 'asc' | 'desc' = 'asc'
		if (
			sortConfig &&
			sortConfig.key === key &&
			sortConfig.direction === 'asc'
		) {
			direction = 'desc'
		}
		setSortConfig({ key, direction })

		const sortedTrains = [...trains].sort((a, b) => {
			if (a[key] < b[key]) return direction === 'asc' ? -1 : 1
			if (a[key] > b[key]) return direction === 'asc' ? 1 : -1
			return 0
		})

		setTrains(sortedTrains)
	}

	const filteredTrains = trains.filter(
		train =>
			train.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			train.destination.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<TableContainer component={Paper}>
			<TextField
				label='Пошук поїздів'
				variant='outlined'
				fullWidth
				margin='normal'
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				sx={{ mb: 2 }}
			/>

			<Table>
				<TableHead>
					<TableRow>
						{[
							'name',
							'departure_time',
							'arrival_time',
							'destination',
							'status',
						].map(column => (
							<TableCell key={column}>
								<TableSortLabel
									active={sortConfig?.key === column}
									direction={
										sortConfig?.key === column ? sortConfig.direction : 'asc'
									}
									onClick={() => handleSort(column as keyof ITrain)}
								>
									{column === 'name'
										? 'Назва'
										: column === 'departure_time'
										? 'Час відправлення'
										: column === 'arrival_time'
										? 'Час прибуття'
										: column === 'destination'
										? 'Пункт призначення'
										: 'Статус'}
								</TableSortLabel>
							</TableCell>
						))}
						<TableCell>Дії</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{filteredTrains.map(train => (
						<TableRow key={train.id}>
							<TableCell>{train.name}</TableCell>
							<TableCell>{train.departure_time}</TableCell>
							<TableCell>{train.arrival_time}</TableCell>
							<TableCell>{train.destination}</TableCell>
							<TableCell>{train.status}</TableCell>
							<TableCell>
								<Link href={`/trains/edit/${train.id}`}>
									<Button variant='outlined' color='primary'>
										Редагувати
									</Button>
								</Link>
								<Button
									onClick={() => handleDelete(train.id)}
									variant='outlined'
									color='error'
								>
									Видалити
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
