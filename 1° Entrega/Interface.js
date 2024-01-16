import {question, keyInPause, keyInYN} from 'readline-sync';
import Sistema from './Sistema.js';
import Propriedade from './Propriedade.js';

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

    telaDeLogin(){
        while (true) {

            console.clear();

            console.log('Tela de Login!');
            const nomeInput = question('Digite o nome cadastrado do Usuario:');
            const cpfInput = question('Digite o CPF cadastrado do Usuario:');
            const usuarioEncontrado = this.sistema.loginDoUsuario(nomeInput, cpfInput);
    
            if (usuarioEncontrado){
                this.telaDeLoginCadastrado(usuarioEncontrado);
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

    //------------------------------------ Menu de login cadastrado ------------------------------------

    telaDeLoginCadastrado(usuarioCadastrado){
        let ciclo = true;

        console.log("-".repeat(50));
        console.log(`Bem vindo ${usuarioCadastrado.nome}`);
        console.log("-".repeat(50));

        while (ciclo) {
            console.log("\nEscolha uma seção:");
            console.log("1. Usuario");
            console.log("2. Propriedades ");
            console.log("3. Reservas");
            console.log("4. Anúncio ");
            console.log("5. Retornar ao menu inicial");

            const escolha = question('Digite o numero da seção desejada: ');

            switch (escolha) {
                case '1':
                    this.teladeLoginCadastrado_Usuario(usuarioCadastrado);
                    break;
                case '2':
                    this.telaDeLoginCadastrado_Propriedades()
                    break;
                case '3':
                    this.telaDeLoginCadastrado_Reservas(usuarioCadastrado)
                    break;
                case '4':
                    this.telaDeLoginCadastrado_Anuncios()
                    break;
                case '5':
                    ciclo = false;
                    break;
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }

        
    }

    //------------------------------------ Menu de login cadastrado - Usuario ------------------------------------

    teladeLoginCadastrado_Usuario(usuario){
        let ciclo = true;
        while (ciclo) {
            console.log("\nEscolha uma opção:");
            console.log("1. Ver meus dados");
            console.log("2. Modificar meus dados ");
            console.log("3. Retornar ao menu de seções");
    
            const escolha = question('Digite o numero da opcao desejada: ');
    
            switch (escolha) {
                case '1':
                    usuario.verMeusDados();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '2':
                    usuario.modificarMeusDados();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                case '3':
                    ciclo = false;
                    break;
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }

    }

    //------------------------------------ Menu de login cadastrado - Propriedades ------------------------------------

    telaDeLoginCadastrado_Propriedades(){
        let ciclo = true;
        while (ciclo) {
            console.log("\nEscolha uma opção:");
            console.log("1. Lista de Propriedades da Pousada Eclipse");
            console.log("2. Adicionar uma Propriedade ");
            console.log("3. Remover uma Propriedade");
            console.log("4. Modificar dados de uma Propriedade");
            console.log("5. Retornar ao menu de seções");
    
            const escolha = question('Digite o numero da opcao desejada: ');
    
            switch (escolha) {
                case '1':
                    Propriedade.verListaDePropriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '2':
                    this.teladeCadastro_Propriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                    
                case '3':
                    this.sistema.excluirPropriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;

                case '4':
                    // Função que modifica os dados de uma propriedade
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;

                case '5':
                    ciclo = false;
                    break;
                    
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    }

    teladeCadastro_Propriedades(){
        while(true){

            console.clear();

            console.log('Tela de Cadastro de Propriedades!');
            const nomeInput = question('Digite um nome para a propriedade: ') || '';
            const enderecoInput = question('Digite seu endereco:') || '';
            const capacidadeInput = question('Digite a capacidade da Propriedade: ') || '';
            const numDeQuartosInput = question('Digite o numero de quartos:') || '';
            const precoInput = question('Digite o valor de uma noite:') || '';
            const disponibilidadeInput = keyInYN('A propriedade está disponivel? (aperte "y" para sim e "n" para não)') || '';
            this.sistema.adicionarPropriedades(nomeInput, enderecoInput, capacidadeInput, numDeQuartosInput, precoInput, disponibilidadeInput);

            keyInPause('\nPressione qualquer tecla para retornar ao menu.');
            break;        
        }
    }


    //------------------------------------ Menu de login cadastrado - Reservas ------------------------------------


    // telaDeLoginCadastrado_Reservas(usuario){
    //     let ciclo = true;
    //     while (ciclo) {
    //         console.log("\nEscolha uma opção:");
    //         console.log("1. Fazer uma reserva");
    //         console.log("2. Ver minha lista de Reservas")
    //         console.log("3. Cancelar Reserva ");
    //         console.log("4. Avaliar Estadia")
    //         console.log("5. Vizualizar Avaliações")
    //         console.log("6. Retornar ao menu de seções")

    
    //         const escolha = question('Digite o numero da opcao desejada: ');
    
    //         switch (escolha) {
    //             case '1':
    //                 //
    //                 keyInPause('\nPressione qualquer tecla para retornar ao menu.');
    //                 break;
    //             case '2':
    //                 //
    //                 keyInPause('\nPressione qualquer tecla para retornar ao menu.');
    //                 break;
    //             case '3':
    //                 //
    //                 keyInPause('\nPressione qualquer tecla para retornar ao menu.');
    //                 break;
    //             case '4':
    //                 //
    //                 keyInPause('\nPressione qualquer tecla para retornar ao menu.');
    //                 break;
    //             case '5':
    //                 //
    //                 keyInPause('\nPressione qualquer tecla para retornar ao menu.');
    //                 break;
    //             case '6':
    //                 ciclo = false;
    //                 break;
    //             default:
    //                 console.log('Opção inválida. Por favor, escolha uma opção válida.');
    //         }
    //     }
    // }

    // teladeCadastro_Reserva(usuario){
    //     while(true){

    //         console.log('Tela de Reserva de Propriedade');

    //         Propriedade.verListaDePropriedades();
    //         const escolha = question('Escolha o ID da propriedade que voce gostaria de reservar: ');
    //         const idReserva = parseInt(escolha);
    //         const idPropriedadeInput = Propriedade.listaDePropriedades.findIndex(propriedade => propriedade.idPropriedade === idReserva);

    //         const dataCheckInInput = question('Digite a data de Check In (ex: 02/02/2024): ') || '';
    //         const dataCheckOutInput = question('Digite a data de Check Out (ex: 05/02/2024): ') || '';

    //         this.sistema.reservarPropriedade(idPropriedadeInput, usuario.idUsuario, dataCheckInInput, dataCheckOutInput, ); 

    //         keyInPause('\nPressione qualquer tecla para retornar ao menu.');
    //         break;        
    //     }
    // }

    //------------------------------------ Menu de login cadastrado - Anuncios ------------------------------------

    telaDeLoginCadastrado_Anuncios(){

    }

}

export default Interface;
