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

    //------------------------------------ Menu Inicial ------------------------------------

    telaInicial() {
        // Exibe um cabeçalho de boas-vindas
        console.log("-".repeat(50));
        console.log("Bem-vindo ao Sistema de Reservas da Pousada Eclipse!!".toUpperCase());
        console.log("-".repeat(50));
    
        // Loop principal para apresentar opções ao usuário
        while (true) {
            console.log("\nEscolha uma opção:");
            console.log("1. Fazer Login");
            console.log("2. Fazer Cadastro");
            console.log("3. Sair do Programa");
    
            // Obtém a escolha do usuário
            const escolha = question('Digite o numero da opcao desejada: ');
    
            // Executa a lógica com base na escolha do usuário
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
    

    telaDeLogin() {
        // Loop principal para solicitar informações de login até que a operação seja concluída
        while (true) {

            console.clear();
            // Campos de Input 
            console.log('Tela de Login!');
            const nomeInput = question('Digite o nome cadastrado do Usuario:');
            const cpfInput = question('Digite o CPF cadastrado do Usuario:');
    
            // Chama o método de login do sistema, passando o nome e CPF fornecidos pelo usuário
            const usuarioEncontrado = this.sistema.loginDoUsuario(nomeInput, cpfInput);
    
            // Se o usuário for encontrado, redireciona para a tela após o login
            if (usuarioEncontrado) {
                this.telaDeLoginCadastrado(usuarioEncontrado);
                break;
            }
        }
    }
    

    teladeCadastro() {
        // Loop principal para solicitar informações de cadastro até que a operação seja concluída
        while (true) {
            console.clear();
    
            console.log('Tela de Cadastro!');
            const nomeInput = question('Digite seu nome completo: ') || '';
            const cpfInput = question('Digite seu CPF (somente numeros):') || '';
            const enderecoInput = question('Digite seu endereco:') || '';
            const telefoneInput = question('Digite seu telefone (Ex:21912345678):') || '';
    
            // Chama o método de cadastro do sistema, passando as informações fornecidas pelo usuário
            this.sistema.cadastroDoUsuario(nomeInput, cpfInput, enderecoInput, telefoneInput);
    
            // Pausa a execução e aguarda uma tecla antes de retornar ao menu
            keyInPause('\nPressione qualquer tecla para retornar ao menu.');
            break; // Sai do loop, encerrando a tela de cadastro
        }
    }
    

    //------------------------------------ Menu de login cadastrado ------------------------------------

    telaDeLoginCadastrado(usuarioCadastrado) {
        let ciclo = true;
    
        // Exibe uma mensagem de boas-vindas ao usuário
        console.log("-".repeat(50));
        console.log(`Bem vindo ${usuarioCadastrado.nome}`);
        console.log("-".repeat(50));
    
        // Loop principal para apresentar opções ao usuário logado
        while (ciclo) {
            console.log("\nEscolha uma seção:");
            console.log("1. Usuario");
            console.log("2. Propriedades ");
            console.log("3. Reservas");
            console.log("4. Anúncio ");
            console.log("5. Retornar ao menu inicial");
    
            const escolha = question('Digite o numero da secao desejada: ');
    
            // Executa a lógica com base na escolha do usuário
            switch (escolha) {
                case '1':
                    // Opção para gerenciar informações do próprio usuário
                    this.teladeLoginCadastrado_Usuario(usuarioCadastrado);
                    break;
                case '2':
                    // Opção para gerenciar propriedades
                    this.telaDeLoginCadastrado_Propriedades();
                    break;
                case '3':
                    // Opção para gerenciar reservas
                    this.telaDeLoginCadastrado_Reservas(usuarioCadastrado);
                    break;
                case '4':
                    // Opção para gerenciar anúncios
                    this.telaDeLoginCadastrado_Anuncios();
                    break;
                case '5':
                    // Opção para retornar ao menu inicial
                    ciclo = false;
                    break;
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    }
    

    //------------------------------------ Menu de login cadastrado - Usuario ------------------------------------

    teladeLoginCadastrado_Usuario(usuario) {
        let ciclo = true; //  Variavel de controle do ciclo
    
        // Loop principal para apresentar opções relacionadas ao usuário logado
        while (ciclo) {
            console.clear();
    
            console.log("\nEscolha uma opção:");
            console.log("1. Ver meus dados");
            console.log("2. Modificar meus dados ");
            console.log("3. Retornar ao menu de seções");
    
            const escolha = question('Digite o numero da opcao desejada: ');
    
            // Executa a lógica com base na escolha do usuário
            switch (escolha) {
                case '1':
                    // Opção para visualizar os dados do próprio usuário
                    usuario.verMeusDados();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '2':
                    // Opção para modificar os dados do próprio usuário
                    usuario.modificarMeusDados();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                    
                case '3':
                    // Opção para retornar ao menu de seções
                    ciclo = false;
                    break;
                    
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    }
    
    //------------------------------------ Menu de login cadastrado - Propriedades ------------------------------------

    telaDeLoginCadastrado_Propriedades() {
        let ciclo = true;
    
        // Loop principal para apresentar opções relacionadas a propriedades
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
    
            // Executa a lógica com base na escolha do usuário
            switch (escolha) {
                case '1':
                    // Opção para visualizar a lista de propriedades
                    this.sistema.verListaDePropriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '2':
                    // Opção para adicionar uma propriedade
                    this.telaCadastrarPropriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
                    
                case '3':
                    // Opção para remover uma propriedade
                    this.sistema.excluirPropriedades();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '4':
                    // Opção para avaliar uma estadia
                    this.telaAvaliarEstadia();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '5':
                    // Opção para visualizar avaliações
                    this.telaVisualizarAvaliacao();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '6':
                    // Opção para modificar dados de uma propriedade
                    this.telaModificarDados();
                    keyInPause('\nPressione qualquer tecla para retornar ao menu.');
                    break;
    
                case '7':
                    // Opção para retornar ao menu de seções
                    ciclo = false;
                    break;
                    
                default:
                    console.log('Opção inválida. Por favor, escolha uma opção válida.');
            }
        }
    }
    

    telaCadastrarPropriedades() {
        // Loop principal para solicitar informações de cadastro de propriedades até que a operação seja concluída
        while (true) {
            console.clear(); // Limpa a tela para melhorar a interface
    
            console.log('Tela de Cadastro de Propriedades!');
            const nomeInput = question('Digite um nome para a propriedade: ') || '';
            const nomeProprietarioInput = question('Digite o nome do proprietario: ') || '';
            const enderecoInput = question('Digite o endereco da propriedade: ') || '';
            const capacidadeInput = question('Digite a capacidade da Propriedade: ') || '';
            const numDeQuartosInput = question('Digite o numero de quartos: ') || '';
            const precoInput = question('Digite o valor de uma noite: ') || '';
            const disponibilidadeInput = keyInYNStrict('A propriedade está disponível? (Sim/Não)') || '';
    
            // Chama o método de adicionar propriedades do sistema, passando as informações fornecidas pelo usuário
            this.sistema.adicionarPropriedades(nomeInput, nomeProprietarioInput, enderecoInput, capacidadeInput, numDeQuartosInput, precoInput, disponibilidadeInput);
            
            // Sai do loop após o cadastro
            break;
        }
    }
    

    telaAvaliarEstadia() {
        console.clear();
        console.log("-".repeat(50));
        console.log("Avaliação de Reserva");
        console.log("-".repeat(50));
    
        // Exibe a lista de propriedades para que o usuário escolha qual avaliar
        this.sistema.verListaDePropriedades();
        const escolha = question('Escolha o ID da propriedade que você gostaria de avaliar: ');
        const idPropriedade = parseInt(escolha);
        
        // Encontra a propriedade selecionada com base no ID
        const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idPropriedade);

        console.clear();
    
        // Solicita a avaliação do usuário
        const avaliacaoInput = question('Por favor, compartilhe sua experiência: ');
    
        // Adiciona a avaliação à lista de avaliações da propriedade
        propriedadeSelecionada.avaliacoes.push(avaliacaoInput);
    
        console.clear();
        console.log("-".repeat(50));
        console.log("Obrigado por avaliar nossa hospedagem");
        console.log("-".repeat(50));
    }
    
    telaVisualizarAvaliacao() {
        console.clear();
        console.log("-".repeat(50));
        console.log("Avaliações da Propriedade");
        console.log("-".repeat(50));
    
        // Exibe a lista de propriedades para que o usuário escolha qual avaliação visualizar
        this.sistema.verListaDePropriedades();
        const escolha = question('Escolha o ID da propriedade que você gostaria de ver as avaliações: ');
        const idPropriedade = parseInt(escolha);
        
        // Encontra a propriedade selecionada com base no ID
        const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idPropriedade);
    
        // Limpa a tela para melhorar a interface
        console.clear();
    
        // Exibe as avaliações da propriedade selecionada
        propriedadeSelecionada.verAvaliacoes();
    }
    

    telaModificarDados() {
        console.clear();
        console.log("-".repeat(50));
        console.log("Modificar dados de uma Propriedade");
        console.log("-".repeat(50));
    
        // Exibe a lista de propriedades para que o usuário escolha qual propriedade modificar
        this.sistema.verListaDePropriedades();
        const escolha = question('Escolha o ID da propriedade que você gostaria de modificar: ');
        const idPropriedade = parseInt(escolha);
        
        // Encontra a propriedade selecionada com base no ID
        const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idPropriedade);
    
        console.clear();
    
        // Chama o método para modificar os dados da propriedade selecionada
        propriedadeSelecionada.modificarDadosDaPropriedade();
    
        console.clear();
        console.log("-".repeat(50));
        console.log("Dados Modificados");
        console.log("-".repeat(50));
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

    telaCadastrarReserva(usuario) {
        // Loop principal para solicitar informações para o cadastro de reserva até que a operação seja concluída
        while (true) {
            console.clear();
            console.log("-".repeat(50));
            console.log('Reserva de Propriedade');
            console.log("-".repeat(50));
    
            // Exibe a lista de propriedades para que o usuário escolha qual propriedade reservar
            this.sistema.verListaDePropriedades();
            const escolha = question('Escolha o ID da propriedade que você gostaria de reservar: ');
            const idReserva = parseInt(escolha);
            
            // Encontra a propriedade selecionada com base no ID
            const idPropriedadeInput = Propriedade.listaDePropriedades.findIndex(propriedade => propriedade.idPropriedade === idReserva);
            const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idReserva);
    
            // Solicita as datas de check-in e check-out ao usuário
            const dataCheckInInput = question('Digite a data de Check In (ex: 02/02/2024): ') || '';
            const dataCheckOutInput = question('Digite a data de Check Out (ex: 05/02/2024): ') || '';
    
            // Calcula o valor total da reserva com base nas informações fornecidas
            const valorTotalInput = Reserva.calcularValorReserva(propriedadeSelecionada.precoPorNoite, dataCheckInInput, dataCheckOutInput);
    
            // Solicita o status de pagamento ao usuário
            const statusDePagamentoInput = question('Status de Pagamento (Pendente ou Pago): ');
    
            // Cria a nova reserva e adiciona ao usuário
            const novaReserva = this.sistema.reservarPropriedade(idPropriedadeInput, usuario.idUsuario, dataCheckInInput, dataCheckOutInput, valorTotalInput, statusDePagamentoInput);
            this.sistema.adicionarReservaAoUsuario(usuario, novaReserva);
    
            // Sai do loop após o cadastro da reserva
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

    telaFazerAnuncio() {
        // Loop principal para solicitar informações para o cadastro do anúncio até que a operação seja concluída
        while (true) {
            console.clear();
            console.log("-".repeat(50));
            console.log('Fazer um anúncio para uma propriedade');
            console.log("-".repeat(50));
    
            // Exibe a lista de propriedades para que o usuário escolha qual propriedade fazer o anúncio
            this.sistema.verListaDePropriedades();
            const escolha = question('Escolha o ID da propriedade que você gostaria de fazer o anúncio: ');
            const idReserva = parseInt(escolha);
            
            // Encontra a propriedade selecionada com base no ID
            const idPropriedadeInput = Propriedade.listaDePropriedades.findIndex(propriedade => propriedade.idPropriedade === idReserva);
            const propriedadeSelecionada = Propriedade.listaDePropriedades.find(propriedade => propriedade.idPropriedade === idReserva);
    
            // Solicita informações para o anúncio ao usuário
            const tituloInput = question('Digite o título do seu anúncio:');
            const descricaoInput = question('Faça uma descrição do seu anúncio:');
            const statusInput = question('Diga o status do anúncio ("Ativo" ou "Não Ativo"):');
            
            // Cria o objeto de anúncio e o adiciona ao sistema
            this.sistema.criarObjAnuncio(propriedadeSelecionada.nomePropriedade, propriedadeSelecionada.nomeProprietario, idPropriedadeInput, tituloInput, descricaoInput, statusInput);
    
            // Sai do loop após o cadastro do anúncio
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
