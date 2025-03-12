import { Reserva, ReservaModel } from '../types/types';

export const criarReserva = async (reservaData: ReservaModel): Promise<Reserva> => {
  const response = await fetch('/api/reservas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservaData),
  });

  if (!response.ok) {
    throw new Error('Erro ao criar reserva');
  }

  const novaReserva = await response.json();
  return novaReserva as Reserva;
};

export const fetchReservas = async (): Promise<Reserva[]> => {
  const response = await fetch('/api/reservas');
  const data = await response.json();
  return data as Reserva[];
};
