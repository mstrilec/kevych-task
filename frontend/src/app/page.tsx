'use client'

import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()

	return (
		<Container maxWidth='md'>
			<Box
				sx={{
					minHeight: '100vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
				}}
			>
				<Typography color='#000' variant='h2' fontWeight='bold' gutterBottom>
					Ласкаво просимо!
				</Typography>
				<Typography variant='h5' color='text.secondary' gutterBottom>
					Тут ви можете переглядати та керувати розкладом поїздів.
				</Typography>

				<Stack spacing={2} direction='row' sx={{ mt: 4 }}>
					<Button
						variant='contained'
						color='primary'
						size='large'
						onClick={() => router.push('/login')}
					>
						Увійти
					</Button>
					<Button
						variant='contained'
						color='secondary'
						size='large'
						onClick={() => router.push('/register')}
					>
						Реєстрація
					</Button>
				</Stack>
			</Box>
		</Container>
	)
}
