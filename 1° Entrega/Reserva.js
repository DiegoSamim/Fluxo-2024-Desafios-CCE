class Reserva{

    static id = 0;
    static ListadeReservas = [];

    constructor(idPropriedade, idUsuario, dataCheckIn, dataCheckOut, valorTotalReserva, statusPagamento){
        this.idReserva = Reserva.id++;
        this.idPropriedade = idPropriedade;
        this.idUsuario = idUsuario;

        // Validar datas de check-in e check-out
        if (!this.validarDatas(dataCheckIn, dataCheckOut)) {
            throw new Error("Datas de check-in e check-out inválidas. Utilize o formato dd/mm/yyyy");
        }

        this.dataCheckIn = dataCheckIn;
        this.dataCheckOut = dataCheckOut;
        this.valorTotalReserva = valorTotalReserva;
        this.statusPagamento = statusPagamento;
        
    }

    static verListaDeReservas(){
        Reserva.ListadeReservas.forEach((reserva) => {
            reserva.verDadosDaReserva();
            console.log('---');
        });
    }

    // Calcula o valor total da reserva com base no preço por noite, data de check-in e data de check-out
    static calcularValorReserva(precoPorNoite, checkInUsuario, checkOutUsuario) {
        // Converte o preço por noite para um número inteiro
        const precoPorNoiteNumerico = parseInt(precoPorNoite);

        // Verifica se o preço por noite é um número positivo
        if (isNaN(precoPorNoiteNumerico) || precoPorNoiteNumerico < 0) {
            throw new Error("Preço por noite inválido. Deve ser um número positivo.");
        }

        // Verifica se as datas de check-in e check-out foram fornecidas
        if (!checkInUsuario || !checkOutUsuario) {
            throw new Error("Datas de check-in e check-out não foram fornecidas.");
        }

        // Divide as datas de check-in e check-out em partes (dia, mês, ano)
        const partesCheckIn = checkInUsuario.split("/");
        const partesCheckOut = checkOutUsuario.split("/");

        // Cria objetos de data para as datas de check-in e check-out
        const dataCheckIn = new Date(partesCheckIn[2], partesCheckIn[1] - 1, partesCheckIn[0]);
        const dataCheckOut = new Date(partesCheckOut[2], partesCheckOut[1] - 1, partesCheckOut[0]);

        // Verifica se as datas de check-in e check-out são válidas
        if (isNaN(dataCheckIn) || isNaN(dataCheckOut) || dataCheckOut <= dataCheckIn) {
            throw new Error("Datas de check-in e check-out inválidas.");
        }

        // Calcula o número de dias de hospedagem
        const diasDeHospedagem = Math.ceil((dataCheckOut - dataCheckIn) / (1000 * 60 * 60 * 24));

        // Calcula o valor total da reserva
        const valorTotal = diasDeHospedagem * precoPorNoiteNumerico;

        return valorTotal;
    }
    
    verDadosDaReserva(){
        console.log(`\nId da Propriedade: ${this.idPropriedade}`);
        console.log(`Id do Usuario: ${this.idUsuario}`);
        console.log(`Data de Check-In: ${this.dataCheckIn}`);
        console.log(`Data de Check-Out: ${this.dataCheckOut}`);
        console.log(`Valor Total da Reserva: ${this.valorTotalReserva}`);
        console.log(`Status de Pagamento: ${this.statusPagamento}`);
    }

    // Função para validar as datas de check-in e check-out no formato dd/mm/yyyy
    validarDatas(checkIn, checkOut) {
        const expressaoRegularData = /^\d{2}\/\d{2}\/\d{4}$/;

        // Verificar se as datas têm o formato correto
        if (!expressaoRegularData.test(checkIn) || !expressaoRegularData.test(checkOut)) {
            return false;
        }

        // Criar objetos Date com as datas fornecidas
        const partesCheckIn = checkIn.split("/");
        const partesCheckOut = checkOut.split("/");
        const dataCheckIn = new Date(partesCheckIn[2], partesCheckIn[1] - 1, partesCheckIn[0]);
        const dataCheckOut = new Date(partesCheckOut[2], partesCheckOut[1] - 1, partesCheckOut[0]);

        // Verificar se as datas são válidas
        if (isNaN(dataCheckIn) || isNaN(dataCheckOut)) {
            return false;
        }

        // Verificar se a data de check-out é posterior à data de check-in
        if (dataCheckOut <= dataCheckIn) {
            return false;
        }

        // Outras verificações podem ser adicionadas conforme necessário

        return true;
    }

}

export default Reserva;