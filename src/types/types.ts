export interface Reserva {
    id: number;
    dataEntrada: string;
    dataSaida: string;
    valorTotal: number;
    usuarioId: number;
    usuario: Usuario;
    tipoSuiteId: number;
    tipoSuite: TipoSuite;
    motelId: number;
    motel: Motel;
}

export interface ReservaModel {
    usuarioId: number;
    tipoSuiteId: number;
    motelId: number;
    dataEntrada: string;
    dataSaida: string;
    valorTotal: number;
}

export interface PagamentoModel {
    reservaId: number;
    valor: number;
}

export interface RegisterUserData {
    nome: string;
    email: string;
    senha: string;
    documento: string;
    reservas: Reserva[];
}

export interface Motel {
    id: number;
    nome?: string;
    tipoSuiteId: number;
    tipoSuite: TipoSuite;
}

export interface TipoSuite {
    id: number;
    nome?: string;
    precoPorHora: number;
}

export interface Usuario {
    id: number;
    nome: string;
    email: string;
}
