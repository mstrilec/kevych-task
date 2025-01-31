'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import TrainForm from '@/components/TrainForm';
import api from '@/services/api';

export default function EditTrainPage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    } else {
      fetchTrain();
    }
  }, [isAuthenticated]);

  const fetchTrain = async () => {
    try {
      const response = await api.get(`/trains/${id}`);
      setTrain(response.data);
    } catch (err) {
      console.error('Помилка при завантаженні поїзда', err);
    }
  };

  const handleUpdateTrain = async (data: any) => {
    try {
      await api.put(`/trains/${id}`, data);
      router.push('/trains');
    } catch (err) {
      console.error('Помилка при оновленні поїзда', err);
    }
  };

  if (!isAuthenticated() || !train) {
    return <p>Завантаження...</p>;
  }

  return <TrainForm initialData={train} onSubmit={handleUpdateTrain} />;
}
