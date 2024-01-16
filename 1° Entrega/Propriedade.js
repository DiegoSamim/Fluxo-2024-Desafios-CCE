class Propriedade {
    static id = 0;
    static listaDePropriedades = [];

    constructor(nomePropriedade, endereço, capacidade, numDeQuartos, precoPorNoite, disponibilidade) {
        this.idPropriedade = Propriedade.id++;
        this.nomePropriedade = nomePropriedade;
        this.endereço = endereço;
        this.capacidade = capacidade;
        this.numDeQuartos = numDeQuartos;
        this.precoPorNoite = precoPorNoite;
        this.disponibilidade = disponibilidade;
        this.avaliacoes = [];
    }

    static verListaDePropriedades(){
        Propriedade.listaDePropriedades.forEach((propriedade) => {
            propriedade.verDadosDaPropriedade();
            console.log('---');
        });
    }

    verDadosDaPropriedade(){
        console.log(`\nID: ${this.idPropriedade}`);
        console.log(`Nome da Propriedade: ${this.nomePropriedade}`);
        console.log(`Endereço: ${this.endereço}`);
        console.log(`Capacidade: ${this.capacidade}`);
        console.log(`N° de Quartos: ${this.numDeQuartos}`);
        console.log(`Preço por Noite: ${this.precoPorNoite}`);
        console.log(`Disponibilidade: ${this.disponibilidade}`);
    }

    verAvaliacoes() {
        this.avaliacoes.forEach((avaliacao) => {
            console.log(avaliacao);
            console.log('---');
        });
    }

    modificarDadosDaPropriedade(){
        //Listar, Escolher e depois modificar 
    }
}

export default Propriedade;