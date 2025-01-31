'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import {
	Box,
	Button,
	Container,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object().shape({
	name: yup.string().required("Назва поїзда обов'язкова"),
	departure_time: yup.string().required("Час відправлення обов'язковий"),
	arrival_time: yup.string().required("Час прибуття обов'язковий"),
	destination: yup.string().required("Пункт призначення обов'язковий"),
	status: yup.string().required("Статус обов'язковий"),
})

interface ITrainFormProps {
	initialData?: {
		name: string
		departure_time: string
		arrival_time: string
		destination: string
		status: string
	} | null
	onSubmit: (data: { name: string; departure_time: string; arrival_time: string; destination: string; status: string }) => void
}

export default function TrainForm({
	initialData = null,
	onSubmit,
}: ITrainFormProps) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: initialData || {
			name: '',
			departure_time: '',
			arrival_time: '',
			destination: '',
			status: '',
		},
	})

	return (
		<Container maxWidth='sm'>
			<Typography color='black' variant='h4' gutterBottom>
				{initialData ? 'Редагувати поїзд' : 'Додати новий поїзд'}
			</Typography>
			<Box
				component='form'
				onSubmit={handleSubmit(onSubmit)}
				noValidate
				sx={{ mt: 1 }}
			>
				<Controller
					name='name'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							margin='normal'
							fullWidth
							label='Назва поїзда'
							error={!!errors.name}
							helperText={errors.name?.message}
						/>
					)}
				/>
				<Controller
					name='departure_time'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							margin='normal'
							fullWidth
							label='Час відправлення'
							type='datetime-local'
							InputLabelProps={{ shrink: true }}
							error={!!errors.departure_time}
							helperText={errors.departure_time?.message}
						/>
					)}
				/>
				<Controller
					name='arrival_time'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							margin='normal'
							fullWidth
							label='Час прибуття'
							type='datetime-local'
							InputLabelProps={{ shrink: true }}
							error={!!errors.arrival_time}
							helperText={errors.arrival_time?.message}
						/>
					)}
				/>
				<Controller
					name='destination'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							margin='normal'
							fullWidth
							label='Пункт призначення'
							error={!!errors.destination}
							helperText={errors.destination?.message}
						/>
					)}
				/>
				<Controller
					name='status'
					control={control}
					render={({ field }) => (
						<TextField
							{...field}
							label='Статус'
							select
							fullWidth
							margin='normal'
							error={!!errors.status}
							helperText={errors.status?.message}
						>
							<MenuItem value='заплановано'>Заплановано</MenuItem>
							<MenuItem value='в дорозі'>В дорозі</MenuItem>
							<MenuItem value='завершено'>Завершено</MenuItem>
						</TextField>
					)}
				/>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
				>
					{initialData ? 'Оновити' : 'Додати'}
				</Button>
			</Box>
			<Button
					fullWidth
					variant='outlined'
					sx={{ mt: 3, mb: 2 }}
					onClick={() => window.history.back()}
				>
					Назад
				</Button>
		</Container>
	)
}
