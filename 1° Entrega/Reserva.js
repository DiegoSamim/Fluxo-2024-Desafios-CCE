class Reserva{

    static id = 0;
    static ListadeReservas = [];

    constructor(idPropriedade, idUsuario, dataCheckIn, dataCheckOut, valorTotalReserva, statusPagamento){
        this.idReserva = Reserva.id++;
        this.idPropriedade = idPropriedade;
        this.idUsuario = idUsuario;
        this.dataCheckIn = dataCheckIn;
        this.dataCheckOut = dataCheckOut;
        this.valorTotalReserva = valorTotalReserva;
        this.statusPagamento = statusPagamento;
    }

    static verListaDeReservas(){
        
    }

    calcularValorReserva(){

    }

    avaliarEstadia(){

    }

    vizualizarAvaliacoes(){
        
    }
}

export default Reserva;