class Reserva{
    constructor(idReserva, idPropriedade, idUsuario, DataCheckIn, DataCheckOut, ValorTotalReserva, StatusPagamento ){
        this.idReserva = idReserva;
        this.idPropriedade = idPropriedade;
        this.idUsuario = idUsuario;
        this.DataCheckIn = DataCheckIn;
        this.DataCheckOut = DataCheckOut;
        this.ValorTotalReserva = ValorTotalReserva;
        this.StatusPagamento = StatusPagamento;
    }
}

export default Reserva;