import { PagamentoModel } from '../types/types';

const financeService = {
    pagarReserva: async (pagamentoData: PagamentoModel) => {
        const { reservaId, valor } = pagamentoData;

        try {
            const response = await fetch('/api/pagamento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ reservaId, valor }),
            });

            if (!response.ok) {
                throw new Error('Erro ao realizar o pagamento');
            }

            const pagamentoResponse = await response.json();
            return pagamentoResponse;
        } catch (error) {
            console.error('Erro no serviço financeiro:', error);
            throw error;
        }
    },

    consultarPagamentos: async (usuarioId: number) => {
        try {
            const response = await fetch(`/api/pagamentos/${usuarioId}`);
            if (!response.ok) {
                throw new Error('Erro ao consultar pagamentos');
            }

            const pagamentos = await response.json();
            return pagamentos;
        } catch (error) {
            console.error('Erro ao consultar pagamentos:', error);
            throw error;
        }
    },

    gerarFatura: async (usuarioId: number, reservaId: number) => {
        try {
            const response = await fetch('/api/fatura', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuarioId, reservaId }),
            });

            if (!response.ok) {
                throw new Error('Erro ao gerar a fatura');
            }

            const fatura = await response.json();
            return fatura;
        } catch (error) {
            console.error('Erro ao gerar fatura:', error);
            throw error;
        }
    },
};

export default financeService;
