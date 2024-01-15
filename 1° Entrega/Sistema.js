import { question } from 'readline-sync';
import Usuario from './Usuario.js';

class Sistema{
    constructor() {

    }

    //Verifica se o usuario está cadastrado
    loginDoUsuario(nome, cpf) {
        const usuarioEncontrado = Usuario.ListadeUsuarios.find(usuario =>
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
        Usuario.ListadeUsuarios.push(novoUsuario);
        console.clear();
        console.log('\nUsuário adicionado com sucesso!');
        Usuario.ListadeUsuarios.forEach((usuario) => {
            usuario.verMeusDados();
          });
    }
}

export default Sistema;