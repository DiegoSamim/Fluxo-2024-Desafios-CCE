class Anuncio{

    static id = 0;
    static ListaDeAnuncios = [];

    constructor(nomePropriedade, nomeProprietario, idpropriedade, titulo, descricao, status){
        this.idAnuncio = Anuncio.id++;
        this.nomePropriedade = nomePropriedade;
        this.nomeProprietario = nomeProprietario;
        this.idpropriedade = idpropriedade;
        this.titulo = titulo;
        this.descricao = descricao;
        this.status = status;
    }

    verDadosDoAnuncio(){
        console.log(`\nID do Anuncio: ${this.idAnuncio}`);
        console.log(`ID da propriedade: ${this.idpropriedade}`);
        console.log(`Nome da Propriedade: ${this.nomePropriedade}`);
        console.log(`Nome da Proprietario: ${this.nomeProprietario}`);
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Status: ${this.status}`);
    }

}

export default Anuncio;