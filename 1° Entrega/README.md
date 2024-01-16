# Desafio Fluxo PAME 2024 - CCE
Reservas Pousada Eclipse: Sistema de gerenciamento de reservas, propriedades e anúncio.

## Objetivo:
Desenvolver um sistema personalizado que atenda de forma precisa e eficiente às demandas exclusivas da pousada, simplificando os processos operacionais, oferecendo uma abordagem organizada para o gerenciamento de dados cruciais para a experiência do hóspede.

## Requisitos:

### Funcionário não Logado:
- [x] Fazer Login
- [x] Fazer Cadastro
- [x] Sair do Programa

### Funcionário Logado:

#### Propriedades
- [x] Ver Lista de Propriedades (Ordem Alfabética)
- [x] Ver dados de uma propriedade
- [x] Modificar dados de uma propriedade
- [x] Adicionar Propriedade
- [x] Excluir Propriedade (Só permite a exclusão caso não haja reservas para a propriedade selecionada. Além disso, anúncios envolvendo essa propriedade também devem ser excluídos.)

#### Reserva
- [x] Ver Lista de Reservas (Ordem Cronológica)
- [x] Reservar Propriedade
- [x] Cancelar Reserva(Exige pelo menos 24h de antecedência)
- [x] Avaliar Estadia
- [x] Visualizar Avaliações

#### Anuncio
- [x] Ver Lista de Anúncios (Ordem Alfabética)
- [x] Fazer Anúncio
- [x] Excluir Anúncio

#### Usuario
- [x] Ver Meus Dados
- [x] Modificar Meus Dados


## Classe Usuário
Responsavel pelos atributos relacionado ao Usuário como:
- ID, Nome, CPF, Endereço, Telefone e Histórico de Reservas*

- Ver meus dados: Método que exibi no terminal todos os atributos relacionado àquele objeto.
- Modificar meus dados: Método que permite alterar todos os atributos exceto o Id.
- Ver Historico de reservas: Retorna todas as reservas armazenada na lista Historico do usuario

## Classe Propriedades
Responsavel pelos atributos relacionado às propriedade como:
- ID, Nome da propriedade, nome do proprietario, endereço, capacidade, numDeQuartos, Preco por noite, disponibilidade

- Ver dados da propriedade: Retorna os atributos da propriedade
- Ver avaliações: Retorna as avaliações armazenada na lista de mesmo nome
- modificar dados: Método que permite alterar todos os atributos exceto ID

*Como ficou um pouco confuso o IdProprietario e de onde ele viria, tomei liberdade para alterar para nome do proprietario

## Classe Reserva
Responsavel pelo atributos relacionados à reserva das propriedades como:
ID da Reserva, ID da propriedade, ID do usuario, Data de check-in, Data de check-out, Valor total da reserva, Status de pagamento.

- ver lista de reservas: Retorna todas as reservas feitas no sistema
- calcular valor da reserva: Logica feita para calcular com base no Preço por noite de uma propridade e o tempo de check-in e check-out o total de custo da reserva.
- ver dados da reserva: Retorna os atributos
- validar Datas: Logica implementada para ter certeza que o usuario coloque corretamente a data no formato certo

## Classe Anúncio
Responsavel pelo atributos relacionados a criar anuncio para as propriedades como:
ID do anuncio, nome da Propriedade, nome do Proprietario, id da propriedade, titulo, descricao, status

- ver dados do anuncio: Retorna os atributos

## Classe Sistema 
Responsável por gerenciar as interações entre usuários, propriedades, reservas e anúncios.

### Usuário
- Cadastro: Método que recebes os parametros para criar um novo objeto (usuário) e armazena na lista de Usuarios
- Login: Verifica pelo nome e cpf se o usuário esta cadastrado (na lista).
- Validar Cpf: simples validação de entrada 

### Propriedades
- Adicionar propriedade: Instancia uma nova propriedade e armazena numa lista dentro da classe propriedade
- Excluir Propriedade: Com base na logica proposta, exclui uma propriedade se ela nao tiver reservas
- ver Lista de propriedades: Retorna todas as propriedades ja cadastradas no sistema

### Reserva
- Reservar Propriedade: Instancia uma reserva e armazena numa lista da classe reserva
- adicionarReservaAoUsuario: recebe dois objetos (usuario e reserva) e armazena a reserva no historico de reservas do usuario
- cancelar reserva: Apenas cancela a reserva com 24h de antecedencia

### Anuncio
- Instancia um anuncio e armazena numa lista da classe Anuncio
- Retorna todos anuncios ja feitos no sistema
- Exclue um anuncio da lista de anuncios

## Classe Interface 
- Métodos para criar a interface do usuário de forma simples e intuitiva.
- Inputs para obter os valores passado pelo usuário
- Responsável em chamar as funções da classe Sistema que vai instanciar determinado objeto com os inputs recebidos.

## Observações:

- É possível ter algumas falhas de padrão em relação a alguns metodos
- Nem todo atributo é devidamente utilizado nessa versão como é caso do status de alguns, porém com mais tempo seria interessante utilizar como filtros ou variaveis de controle para outras funções.
- Resta passar um pente fino em busca de erros, por enquanto é possível ir e voltar do menun inicial até qualqeur seção sem problemas.