import { question } from 'readline-sync';

class Usuario {
    constructor() {
        this.historicoDeReservas = [];
    }

    verHistoricoDeReservas() {
        console.log("Histórico de Reservas:");
        this.historicoDeReservas.forEach((reserva) => {
            console.log(reserva);
        });
        console.log("---");
    }
}

class Reserva {
    constructor(idReserva, dataCheckIn) {
        this.idReserva = idReserva;
        this.dataCheckIn = dataCheckIn;
    }
}

class Sistema {
    constructor() {
        this.historicoDeReservas = [];
    }

    adicionarReservaAoUsuario(objUsuario, objReserva) {
        objUsuario.historicoDeReservas.push(objReserva);
        console.log("Reserva adicionada ao histórico do usuário.");
    }

    cancelarReserva(objUsuario) {
        objUsuario.verHistoricoDeReservas();

        const escolha = question('Escolha o ID da reserva para cancelar: ');
        const idParaRemover = parseInt(escolha);

        const reservaSelecionadaIndex = objUsuario.historicoDeReservas.findIndex(reserva => reserva.idReserva === idParaRemover);

        if (reservaSelecionadaIndex !== -1) {
            const reservaSelecionada = objUsuario.historicoDeReservas[reservaSelecionadaIndex];

            // Convertendo a string de data para o formato "mm/dd/yyyy"
            const partesData = reservaSelecionada.dataCheckIn.split('/');
            const dataFormatada = `${partesData[1]}/${partesData[0]}/${partesData[2]}`;

            const dataAtual = new Date();
            const dataReserva = new Date(dataFormatada);
            const diferencaEmMilissegundos = dataReserva - dataAtual;

            const horasMinimasAntecedencia = 24 * 60 * 60 * 1000; // 24 horas em milissegundos
            if (diferencaEmMilissegundos > horasMinimasAntecedencia) {
                objUsuario.historicoDeReservas.splice(reservaSelecionadaIndex, 1);
                console.clear();
                console.log(`Reserva com ID ${idParaRemover} cancelada com sucesso.`);
            } else {
                console.clear();
                console.log(`A reserva com ID ${idParaRemover} não pode ser cancelada com menos de 24 horas de antecedência.`);
            }
        } else {
            console.clear();
            console.log(`Reserva com ID ${idParaRemover} não encontrada.`);
        }
    }
}

// Exemplo de uso
const sistema = new Sistema();
const usuario = new Usuario();

// Adicionando algumas reservas para o histórico
sistema.adicionarReservaAoUsuario(usuario, new Reserva(1, '20/01/2024'));
sistema.adicionarReservaAoUsuario(usuario, new Reserva(2, '18/01/2024'));
sistema.adicionarReservaAoUsuario(usuario, new Reserva(3, '16/01/2024'));

// Cancelando uma reserva
sistema.cancelarReserva(usuario);

// Verificando o histórico atualizado
usuario.verHistoricoDeReservas();
