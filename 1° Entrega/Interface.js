import {question} from 'readline-sync';

class Interface {
    constructor(){

    }

    telaInicial(){
        console.log("-".repeat(50));
        console.log("Bem-vindo ao Sistema de Reservas da Pousada Eclipse!!".toUpperCase());
        console.log("-".repeat(50));

        let usuarioLogado = null;

        while (true) {
        console.log("\nEscolha uma opção:");
        console.log("1. Fazer Login");
        console.log("2. Fazer Cadastro");
        console.log("3. Sair do Programa");

        const escolha = question('Digite o numero da opcao desejada: ');

        switch (escolha) {
            case '1':
            console.log("Tela de Login do Usuario");
            break;

            case '2':
            console.log('Tela de Cadastro do Usuario');
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
}

export default Interface;
