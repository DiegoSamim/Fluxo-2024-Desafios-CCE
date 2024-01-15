import {question, keyInPause} from 'readline-sync';
import Sistema from './Sistema.js';

// Classe com os métodos para criar a interface e seus inputs com as respectivas variáveis

class Interface {
    constructor(){
        this.sistema = new Sistema();
    }

    telaInicial(){
        console.log("-".repeat(50));
        console.log("Bem-vindo ao Sistema de Reservas da Pousada Eclipse!!".toUpperCase());
        console.log("-".repeat(50));


        while (true) {
            // console.clear();
            console.log("\nEscolha uma opção:");
            console.log("1. Fazer Login");
            console.log("2. Fazer Cadastro");
            console.log("3. Sair do Programa");

            const escolha = question('Digite o numero da opcao desejada: ');

            switch (escolha) {
                case '1':
                console.log("Tela de Login do Usuario");
                this.telaDeLogin();
                break;

                case '2':
                console.log('Cadastro do Usuario');
                this.teladeCadastro();
                break;

                case '3':
                console.log('Saindo do programa. Até logo!');
                process.exit(); // Encerra o programa
                break;

                default:
                console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    }

    teladeLoginCadastrado(usuarioCadastrado){
        console.log("-".repeat(50));
        console.log(`Bem vindo ${usuarioCadastrado.nome}`);
        console.log("-".repeat(50));

        while (true) {
            console.log("\nEscolha uma opção:");
            console.log("1. Ver meus dados");
            console.log("2. Modificar meus dados ");
    
            const escolha = question('Digite o numero da opcao desejada: ');
    
            switch (escolha) {
                case '1':
                    usuarioCadastrado.verMeusDados();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '2':
                    usuarioCadastrado.modificarMeusDados();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }

    }

    telaDeLogin(){
        while (true) {

            console.clear();

            console.log('Tela de Login!');
            const nomeInput = question('Digite o nome cadastrado do Usuario:');
            const cpfInput = question('Digite o CPF cadastrado do Usuario:');
            const usuarioEncontrado = this.sistema.loginDoUsuario(nomeInput, cpfInput);
    
            if (usuarioEncontrado){
                this.teladeLoginCadastrado(usuarioEncontrado);
            }
        }

    }

    teladeCadastro(){
        while(true){

            console.clear();

            console.log('Tela de Cadastro!');
            const nomeInput = question('Digite seu nome completo: ') || '';
            const cpfInput = question('Digite seu CPF:') || '';
            const enderecoInput = question('Digite seu endereco:') || '';
            const telefoneInput = question('Digite seu telefone:') || '';
            this.sistema.cadastroDoUsuario(nomeInput, cpfInput, enderecoInput, telefoneInput);

            keyInPause('\nPressione qualquer tecla para retornar ao menu.');
            break;        
        }
    }
}

export default Interface;
