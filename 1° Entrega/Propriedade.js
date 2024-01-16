import { question, keyInYN } from "readline-sync";

class Propriedade {
    static id = 0;
    static listaDePropriedades = [];

    constructor(nomePropriedade, nomeProprietario, endereço, capacidade, numDeQuartos, precoPorNoite, disponibilidade) {
        this.idPropriedade = Propriedade.id++;
        this.nomePropriedade = nomePropriedade;
        this.nomeProprietario = nomeProprietario;
        this.endereço = endereço;
        this.capacidade = capacidade;
        this.numDeQuartos = numDeQuartos;
        this.precoPorNoite = precoPorNoite;
        this.disponibilidade = disponibilidade;
        this.avaliacoes = [];
    }


    verDadosDaPropriedade(){
        console.log(`\nID: ${this.idPropriedade}`);
        console.log(`Nome da Propriedade: ${this.nomePropriedade}`);
        console.log(`Nome do Proprietario: ${this.nomeProprietario}`);
        console.log(`Endereço: ${this.endereço}`);
        console.log(`Capacidade: ${this.capacidade}`);
        console.log(`N° de Quartos: ${this.numDeQuartos}`);
        console.log(`Preço por Noite: ${this.precoPorNoite}`);
        console.log(`Disponibilidade: ${this.disponibilidade}`);
    }

    verAvaliacoes() {
        console.clear();
        console.log("-".repeat(50));
        this.avaliacoes.forEach((avaliacao) => {
            console.log(avaliacao);
            console.log('---');
        });
        console.log("-".repeat(50));
    }

    modificarDadosDaPropriedade(){
        this.nomePropriedade = question(`Digite o novo nome da propriedade (${this.nomePropriedade}):`) || this.nomePropriedade;
        this.nomeProprietario = question(`Digite o nome do proprietario (${this.nomeProprietario}):`) || this.nomeProprietario;
        this.endereço = question(`Digite o endereco (${this.endereço}):`) || this.endereço;
        this.capacidade = question(`Digite a capacidade (${this.capacidade}):`) || this.capacidade;
        this.numDeQuartos = question(`Digite o numero de quartos (${this.numDeQuartos}):`) || this.numDeQuartos;
        this.precoPorNoite = question(`Digite o preco por noite (${this.precoPorNoite}):`) || this.precoPorNoite;
        this.disponibilidade = keyInYN('A propriedade esta disponivel ? (aperte "y" para sim e "n" para nao)') || this.disponibilidade;
    }
}

export default Propriedade;