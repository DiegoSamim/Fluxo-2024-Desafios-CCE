import { question } from 'readline-sync';
import Usuario from './Usuario.js';
import Propriedade from './Propriedade.js';
import Reserva from './Reserva.js';
import Anuncio from './Anuncio.js';

class Sistema{
    constructor() {

    }

    //---------------------------------------- Usuario ----------------------------------------

    // Verifica se o usuário está cadastrado
    loginDoUsuario(nome, cpf) {
        // Encontra o usuário com base no nome (mesmo que so uma parte do nome) e CPF fornecidos
        const usuarioEncontrado = Usuario.ListaDeUsuarios.find(usuario =>
            usuario.nome.toLowerCase().includes(nome.toLowerCase()) && usuario.cpf === cpf);

        // Verifica se o usuário foi encontrado
        if (usuarioEncontrado) {
            console.clear(); // Limpa a tela para melhorar a interface
            console.log(`Usuário encontrado:\n ID: ${usuarioEncontrado.idUsuario}\n Nome: ${usuarioEncontrado.nome}\n CPF: ${usuarioEncontrado.cpf}\n`);
        } else {
            console.clear(); // Limpa a tela para melhorar a interface
            console.log('Nenhum usuário encontrado com as informações fornecidas.');
        }

        // Retorna o usuário encontrado (ou null se não encontrado)
        return usuarioEncontrado;
    }


    validarCPF(cpf) {
        // Verifica se o CPF possui exatamente 11 dígitos
        return /^\d{11}$/.test(cpf);
    }

    // Cria um novo usuario instanciando seu objeto
    cadastroDoUsuario(nome, cpf, endereco, telefone) {

        // Validação dos dados de entrada
        if (!nome || !cpf || !endereco || !telefone) {
            console.clear();
            console.log('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Validação do CPF
        if (!this.validarCPF(cpf)) {
            console.clear();
            console.log('CPF inválido. Certifique-se de que possui 11 dígitos.');
            return;
        }

        // Verifica se o CPF já está cadastrado
        if (Usuario.ListaDeUsuarios.some(usuario => usuario.cpf === cpf)) {
            console.clear();
            console.log('Usuário com este CPF já cadastrado.');
            return;
        }

        // Validação do número de telefone
        if (telefone.length !== 11 || !/\d{11}/.test(telefone)) {
            console.clear();
            console.log('Número de telefone inválido. Certifique-se de que possui 11 dígitos.');
            return;
        }

        const novoUsuario = new Usuario(nome, cpf, endereco, telefone);
        Usuario.ListaDeUsuarios.push(novoUsuario);
        console.clear();
        console.log('\nUsuário adicionado com sucesso!');
        Usuario.ListaDeUsuarios.forEach((usuario) => {
            usuario.verMeusDados();
          });
    }

    //---------------------------------------- Propriedade ----------------------------------------

    // Adiciona uma nova propriedade à lista
    adicionarPropriedades(nomePropriedade, nomeProprietario, endereço, capacidade, numDeQuartos, precoPorNoite, disponibilidade) {
        // Cria uma nova instância de Propriedade com os parâmetros fornecidos
        const novaPropriedade = new Propriedade(nomePropriedade, nomeProprietario, endereço, capacidade, numDeQuartos, precoPorNoite, disponibilidade);

        // Adiciona a nova propriedade à lista de propriedades
        Propriedade.listaDePropriedades.push(novaPropriedade);

        // Ordena a lista de propriedades pelo nome (ordenamento alfabético)
        Propriedade.listaDePropriedades.sort((a, b) => {
            return a.nomePropriedade.localeCompare(b.nomePropriedade);
        });

        console.clear(); 
        console.log('\nPropriedade adicionada com sucesso!');

        // Exibe os dados de todas as propriedades após a adição
        Propriedade.listaDePropriedades.forEach((propriedade) => {
            propriedade.verDadosDaPropriedade();
        });
    }


    // Exclui uma propriedade, verificando se há reservas associadas
    excluirPropriedades() {
        // Exibe a lista de propriedades antes da exclusão
        this.verListaDePropriedades();

        // Pede ao usuário para escolher o ID da propriedade para remover
        const escolha = question('Escolha o ID da propriedade para remover: ');

        // Converte a escolha para número
        const idParaRemover = parseInt(escolha);

        // Verifica se a propriedade possui reservas associadas
        const propriedadeComReservas = Reserva.ListadeReservas.some(reserva => reserva.idPropriedade === idParaRemover);

        // Se a propriedade possuir reservas, exibe uma mensagem e não realiza a exclusão
        if (propriedadeComReservas) {
            console.clear();
            console.log(`Não é possível remover a propriedade com ID ${idParaRemover} pois ela possui reservas.`);
        } else {
            // Se não houver reservas, tenta encontrar a propriedade na lista
            const indiceParaRemover = Propriedade.listaDePropriedades.findIndex(propriedade => propriedade.idPropriedade === idParaRemover);

            // Se encontrou a propriedade na lista, a remove
            if (indiceParaRemover !== -1) {
                // Remove a propriedade com base no índice encontrado
                Propriedade.listaDePropriedades.splice(indiceParaRemover, 1);
                console.clear();
                console.log(`Propriedade com ID ${idParaRemover} removida com sucesso.`);
                
                // Exibe a lista atualizada de propriedades
                this.verListaDePropriedades();
            } else {
                // Se não encontrou a propriedade na lista, exibe uma mensagem
                console.clear();
                console.log(`Propriedade com ID ${idParaRemover} não encontrada.`);
            }
        }
    }

    verListaDePropriedades(){
        console.clear();
        console.log("-".repeat(50));
        Propriedade.listaDePropriedades.forEach((propriedade) => {
            propriedade.verDadosDaPropriedade();
            console.log('---');
        });
        console.log("-".repeat(50));
    }

    //---------------------------------------- Reserva ----------------------------------------

    reservarPropriedade(idPropriedade, idUsuario, dataCheckIn, dataCheckOut, valorTotalReserva, statusPagamento){
        const novaReserva = new Reserva(idPropriedade, idUsuario, dataCheckIn, dataCheckOut, valorTotalReserva, statusPagamento);
        Reserva.ListadeReservas.push(novaReserva);
        console.clear();
        console.log('\nReserva efetuada com sucesso!');
        console.log(novaReserva);

        return novaReserva;
    }

    adicionarReservaAoUsuario(objUsuario, objReserva){
        objUsuario.historicoDeReservas.push(objReserva);
    }

    // Cancela uma reserva para um usuário
    cancelarReserva(objUsuario) {
        // Exibe o histórico de reservas do usuário
        objUsuario.verHistoricoDeReservas();

        // Solicita ao usuário escolher o ID da reserva para cancelar
        const escolha = question('Escolha o ID da reserva para cancelar: ');
        const idParaRemover = parseInt(escolha);

        // Encontra o índice da reserva no histórico do usuário
        const reservaSelecionadaIndex = objUsuario.historicoDeReservas.findIndex(reserva => reserva.idReserva === idParaRemover);

        // Verifica se a reserva foi encontrada no histórico do usuário
        if (reservaSelecionadaIndex !== -1) {
            const reservaSelecionada = objUsuario.historicoDeReservas[reservaSelecionadaIndex];

            // Convertendo a string de data para o formato "mm/dd/yyyy" para criar objetos Date
            const partesData = reservaSelecionada.dataCheckIn.split('/');
            const dataFormatada = `${partesData[1]}/${partesData[0]}/${partesData[2]}`;

            const dataAtual = new Date();
            const dataReserva = new Date(dataFormatada);
            const diferencaEmMilissegundos = dataReserva - dataAtual;

            const horasMinimasAntecedencia = 24 * 60 * 60 * 1000; // 24 horas em milissegundos

            // Verifica se a reserva pode ser cancelada com pelo menos 24 horas de antecedência
            if (diferencaEmMilissegundos > horasMinimasAntecedencia) {
                // Remove a reserva do histórico do usuário
                objUsuario.historicoDeReservas.splice(reservaSelecionadaIndex, 1);
                console.clear();
                console.log(`Reserva com ID ${idParaRemover} cancelada com sucesso.`);
            } else {
                console.clear();
                console.log(`A reserva com ID ${idParaRemover} não pode ser cancelada com menos de 24 horas de antecedência.`);
            }
        } else {
            console.clear();
            console.log(`Reserva com ID ${idParaRemover} não encontrada.`);
        }
    }

    //---------------------------------------- Anuncio ----------------------------------------

    criarObjAnuncio(nomePropriedade, nomeProprietario, idpropriedade, titulo, descricao, status){
        const novoAnuncio = new Anuncio(nomePropriedade, nomeProprietario, idpropriedade, titulo, descricao, status);
        Anuncio.ListaDeAnuncios.push(novoAnuncio);
        Anuncio.ListaDeAnuncios.sort((a, b) => { return a.nomePropriedade.localeCompare(b.nomePropriedade);});
        console.clear();
        console.log('\nAnuncio Criado!');
    }

    verListaDeAnuncios(){
        console.clear();
        console.log("-".repeat(50));
        Anuncio.ListaDeAnuncios.forEach((anuncio) => {
            anuncio.verDadosDoAnuncio();
            console.log('---');
        });
        console.log("-".repeat(50));
    }

    // Exclui um anúncio com base no ID escolhido pelo usuário
    excluirAnuncio() {
        // Exibe a lista de anúncios para que o usuário escolha qual anúncio remover
        this.verListaDeAnuncios();

        // Solicita ao usuário escolher o ID do anúncio para remover
        const escolha = question('Escolha o ID do anúncio que você gostaria de remover: ');
        const idAnuncio = parseInt(escolha);

        // Encontra o índice do anúncio na lista de anúncios
        const indiceParaRemover = Anuncio.ListaDeAnuncios.findIndex(anuncio => anuncio.idAnuncio === idAnuncio);

        // Verifica se o anúncio foi encontrado na lista
        if (indiceParaRemover !== -1) {
            // Remove o anúncio com base no índice encontrado
            Anuncio.ListaDeAnuncios.splice(indiceParaRemover, 1);
            console.clear();
            console.log(`Anúncio com ID ${idAnuncio} removido com sucesso.`);
            this.verListaDeAnuncios(); // Exibe a lista atualizada de anúncios
        } else {
            console.clear();
            console.log(`Anúncio com ID ${idAnuncio} não encontrado.`);
        }
    }


}

export default Sistema;