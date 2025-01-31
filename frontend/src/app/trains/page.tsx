'use client';

import TrainList from '@/components/TrainList';
import { useAuth } from '@/hooks/useAuth'
import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function TrainsPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return (
    <Container>
      <Typography color='black' variant="h4" gutterBottom>
        Розклад поїздів
      </Typography>
      <Link href="/trains/add">
        <Button variant="contained" color="primary">
          Додати поїзд
        </Button>
      </Link>
      <TrainList />
    </Container>
  );
}