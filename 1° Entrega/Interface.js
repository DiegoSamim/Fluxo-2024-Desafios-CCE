import {question, keyInPause, keyInYN} from 'readline-sync';
import Sistema from './Sistema.js';
import Propriedade from './Propriedade.js';
import Reserva from './Reserva.js';
import Anuncio from './Anuncio.js';

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
                break;
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

            const escolha = question('Digite o numero da secao desejada: ');

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
            console.clear();
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
            console.clear();
            console.log("\nEscolha uma opção:");
            console.log("1. Lista de Propriedades da Pousada Eclipse");
            console.log("2. Adicionar uma Propriedade ");
            console.log("3. Remover uma Propriedade");
            console.log("4. Avaliar Estadia");
            console.log("5. Vizualizar Avaliações")
            console.log("6. Modificar dados de uma Propriedade");
            console.log("7. Retornar ao menu de seções");
    
            const escolha = question('Digite o numero da opcao desejada: ');
    
            switch (escolha) {
                case '1':
                    this.sistema.verListaDePropriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '2':
                    this.telaCadastrarPropriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                    
                case '3':
                    this.sistema.excluirPropriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;

                case '4':
                    this.telaAvaliarEstadia();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                case '5':
                    this.telaVisualizarAvaliacao();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;

                case '6':
                    // Função que modifica os dados de uma propriedade
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;

                case '7':
                    ciclo = false;
                    break;
                    
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    }

    telaCadastrarPropriedades(){
        while(true){

            console.clear();

            console.log('Tela de Cadastro de Propriedades!');
            const nomeInput = question('Digite um nome para a propriedade: ') || '';
            const nomeProprietarioInput = question('Digite o nome do proprietario: ') || '';
            const enderecoInput = question('Digite seu endereco:') || '';
            const capacidadeInput = question('Digite a capacidade da Propriedade: ') || '';
            const numDeQuartosInput = question('Digite o numero de quartos:') || '';
            const precoInput = question('Digite o valor de uma noite:') || '';
            const disponibilidadeInput = keyInYN('A propriedade esta disponivel ? (aperte "y" para sim e "n" para nao)') || '';
            this.sistema.adicionarPropriedades(nomeInput, nomeProprietarioInput, enderecoInput, capacidadeInput, numDeQuartosInput, precoInput, disponibilidadeInput);
            break;      
        }
    }

    telaAvaliarEstadia(){

        console.clear();
        console.log("-".repeat(50));
        console.log("Avaliação de Reserva");
        console.log("-".repeat(50));

        this.sistema.verListaDePropriedades();
        const escolha = question('Escolha o ID da propriedade que voce gostaria de avaliar: ');
        const idPropriedade = parseInt(escolha);
        const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idPropriedade);

        const avaliacaoInput = question('Por favor, nos conste sua experiencia:')
        propriedadeSelecionada.avaliacoes.push(avaliacaoInput);

        console.clear();
        console.log("-".repeat(50));
        console.log("Obrigado por avaliar nossa hospedagem");
        console.log("-".repeat(50));
    }

    telaVisualizarAvaliacao(){
        console.clear();
        console.log("-".repeat(50));
        console.log("Avaliaçõe da Propriedade");
        console.log("-".repeat(50));

        this.sistema.verListaDePropriedades();
        const escolha = question('Escolha o ID da propriedade que voce gostaria de ver as avaliacoes: ');
        const idPropriedade = parseInt(escolha);
        const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idPropriedade);

        propriedadeSelecionada.verAvaliacoes();
    }

    //------------------------------------ Menu de login cadastrado - Reservas ------------------------------------


    telaDeLoginCadastrado_Reservas(usuario){
        let ciclo = true;
        while (ciclo) {
            console.clear();
            console.log("\nEscolha uma opção:");
            console.log("1. Fazer uma reserva");
            console.log("2. Ver minha lista de Reservas")
            console.log("3. Cancelar Reserva ");
            console.log("4. Retornar ao menu de seções")

    
            const escolha = question('Digite o numero da opcao desejada: ');
    
            switch (escolha) {
                case '1':
                    this.telaCadastrarReserva(usuario)
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                case '2':
                    usuario.verHistoricoDeReservas();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                case '3':
                    this.sistema.cancelarReserva(usuario)
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                case '4':
                    ciclo = false;
                    break;
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    }

    telaCadastrarReserva(usuario){
        while(true){
            console.clear()
            console.log("-".repeat(50));
            console.log('Reserva de Propriedade');
            console.log("-".repeat(50));

            this.sistema.verListaDePropriedades();
            const escolha = question('Escolha o ID da propriedade que voce gostaria de reservar: ');
            const idReserva = parseInt(escolha);
            const idPropriedadeInput = Propriedade.listaDePropriedades.findIndex(propriedade => propriedade.idPropriedade === idReserva);
            const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idReserva);

            const dataCheckInInput = question('Digite a data de Check In (ex: 02/02/2024): ') || '';
            const dataCheckOutInput = question('Digite a data de Check Out (ex: 05/02/2024): ') || '';

            const valorTotalInput = Reserva.calcularValorReserva(propriedadeSelecionada.precoPorNoite, dataCheckInInput, dataCheckOutInput);

            const statusDePagamentoInput = question('Staus de Pagamento (Pendente ou Pago): ');

            const novaReserva = this.sistema.reservarPropriedade(idPropriedadeInput, usuario.idUsuario, dataCheckInInput, dataCheckOutInput, valorTotalInput, statusDePagamentoInput);
            this.sistema.adicionarReservaAoUsuario(usuario, novaReserva);
            break;      
        }
    }


    //------------------------------------ Menu de login cadastrado - Anuncios ------------------------------------

    telaDeLoginCadastrado_Anuncios(){
        let ciclo = true;
        while (ciclo) {
            console.clear();
            console.log("\nEscolha uma opção:");
            console.log("1. Fazer um anuncio");
            console.log("2. Excluir anuncio")
            console.log("3. Ver lista de anuncio");
            console.log("4. Retornar ao menu de seções")

    
            const escolha = question('Digite o numero da opcao desejada: ');
    
            switch (escolha) {
                case '1':
                    this.telaFazerAnuncio();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                case '2':
                    this.telaExcluirAnuncio()
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                case '3':
                    this.sistema.verListaDeAnuncios();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                case '4':
                    ciclo = false;
                    break;
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    }

    telaFazerAnuncio(){
        while(true){
            console.clear()
            console.log("-".repeat(50));
            console.log('Fazer um anuncio para uma propriedade');
            console.log("-".repeat(50));
    
            this.sistema.verListaDePropriedades();
            const escolha = question('Escolha o ID da propriedade que voce gostaria de fazer o anuncio: ');
            const idReserva = parseInt(escolha);
            const idPropriedadeInput = Propriedade.listaDePropriedades.findIndex(propriedade => propriedade.idPropriedade === idReserva);
            const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idReserva);
    
            const tituloInput = question('Digite o titulo do seu anuncio:');
            const descricaoInput = question('Faca uma descricao do seu anuncio:');
            const statusInput = question('Diga o status do anuncio ("Ativo" ou "Nao Ativo"):')
            
            this.sistema.criarObjAnuncio(propriedadeSelecionada.nomePropriedade, propriedadeSelecionada.nomeProprietario, idPropriedadeInput, tituloInput, descricaoInput, statusInput)
            break;
        }
    }

    telaExcluirAnuncio(){
        console.clear()
        console.log("-".repeat(50));
        console.log('Excluir Anuncio');
        console.log("-".repeat(50));

        this.sistema.excluirAnuncio();
    }

}

export default Interface;
