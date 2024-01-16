import { question } from 'readline-sync';
import Usuario from './Usuario.js';
import Propriedade from './Propriedade.js';
import Reserva from './Reserva.js';

class Sistema{
    constructor() {

    }

    //---------------------------------------- Usuario ----------------------------------------

    //Verifica se o usuario está cadastrado
    loginDoUsuario(nome, cpf) {
        const usuarioEncontrado = Usuario.ListaDeUsuarios.find(usuario =>
            usuario.nome.toLowerCase().includes(nome.toLowerCase()) && usuario.cpf === cpf);
        
        if (usuarioEncontrado) {
            console.clear();
            console.log(`Usuário encontrado:\n ID: ${usuarioEncontrado.idUsuario}\n Nome: ${usuarioEncontrado.nome}\n CPF: ${usuarioEncontrado.cpf}`);
        } else {
            console.clear();
            console.log('Nenhum usuário encontrado com as informações fornecidas.');
        }

        return usuarioEncontrado;
    }

    // Cria um novo usuario instanciando seu objeto
    cadastroDoUsuario(nome, cpf, endereco, telefone) {
        const novoUsuario = new Usuario(nome, cpf, endereco, telefone);
        Usuario.ListaDeUsuarios.push(novoUsuario);
        console.clear();
        console.log('\nUsuário adicionado com sucesso!');
        Usuario.ListaDeUsuarios.forEach((usuario) => {
            usuario.verMeusDados();
          });
    }

    //---------------------------------------- Propriedade ----------------------------------------

    adicionarPropriedades(nomePropriedade, endereço, capacidade, numDeQuartos, precoPorNoite, disponibilidade){

        const novaPropriedade = new Propriedade(nomePropriedade, endereço, capacidade, numDeQuartos, precoPorNoite, disponibilidade);
        Propriedade.listaDePropriedades.push(novaPropriedade);
        Propriedade.listaDePropriedades.sort((a, b) => { return a.nomePropriedade.localeCompare(b.nomePropriedade);});
        console.clear();
        console.log('\nPropriedade adicionada com sucesso!');
        Propriedade.listaDePropriedades.forEach((propriedade) => {propriedade.verDadosDaPropriedade();});
    }

    excluirPropriedades() {
        Propriedade.verListaDePropriedades();
    
        const escolha = question('Escolha o ID da propriedade para remover: ');
    
        // Converter a escolha para número
        const idParaRemover = parseInt(escolha);
    
        const indiceParaRemover = Propriedade.listaDePropriedades.findIndex(propriedade => propriedade.idPropriedade === idParaRemover);
    
        if (indiceParaRemover !== -1) {
            // Remover a propriedade com base no índice encontrado
            Propriedade.listaDePropriedades.splice(indiceParaRemover, 1);
            console.clear();
            console.log(`Propriedade com ID ${idParaRemover} removida com sucesso.`);
            Propriedade.verListaDePropriedades();
        } else {
            console.clear();
            console.log(`Propriedade com ID ${idParaRemover} não encontrada.`);
        }
    }

    //---------------------------------------- Reserva ----------------------------------------

    // reservarPropriedade(idPropriedade, idUsuario, dataCheckIn, dataCheckOut, valorTotalReserva, statusPagamento){
    //     const novaReserva = new Reserva(idPropriedade, idUsuario, dataCheckIn, dataCheckOut, valorTotalReserva, statusPagamento);
    //     Reserva.ListadeReservas.push(novaReserva);
    //     console.clear();
    //     console.log('\nReserva efetuada com sucesso!');
    // }

    // adicionarReserva

    // cancelarReserva(){

    // }


}

export default Sistema;