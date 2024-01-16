import {question} from 'readline-sync';

// Classe para criar um novo usuario no sistema de resarvas da Pousada
class Usuario {

    static id = 0;
    static ListaDeUsuarios = [];

    constructor(nome, cpf, enderecoDeContato, telefone){
        this.idUsuario = Usuario.id++;
        this.nome = nome;
        this.cpf = cpf;
        this.enderecoDeContato = enderecoDeContato;
        this.telefone = telefone;
        this.historicoDeReservas = [];
    }

    verMeusDados(){
        console.clear();

        console.log(`ID: ${this.idUsuario}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Endereço de Contato: ${this.enderecoDeContato}`);
        console.log(`Telefone: ${this.telefone}`);
        console.log(`Historico de Reservas: ${this.historicoDeReservas}`);
    }

    modificarMeusDados(){
        console.clear();
        console.log('Mudança de Dados:');
        this.nome = question(`Digite seu nome completo (${this.nome}): `) || this.nome;
        this.cpf = question(`Digite seu CPF (${this.cpf}): `) || this.cpf;
        this.enderecoDeContato = question(`Digite seu endereco (${this.enderecoDeContato}): `) || this.enderecoDeContato;
        this.telefone = question(`Digite seu telefone (${this.telefone}): `) || this.telefone;
        console.log('Mudança de Dados Concluída');
    }

    verHistoricoDeReservas() {
        console.clear();
        console.log("-".repeat(50));
        this.historicoDeReservas.forEach((reserva) => {
            for (let atributo in reserva) {
                console.log(`${atributo}: ${reserva[atributo]}`);
            }
            console.log('---');
        });
        console.log("-".repeat(50));
    }

}

export default Usuario;