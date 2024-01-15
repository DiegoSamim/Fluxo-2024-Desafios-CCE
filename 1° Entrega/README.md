# Desafio Fluxo PAME 2024 - CCE
Reservas Pousada Eclipse: Sistema de gerenciamento de reservas, propriedades e anúncio.

## Objetivo:
Desenvolver um sistema personalizado que atenda de forma precisa e eficiente às demandas exclusivas da pousada, simplificando os processos operacionais, oferecendo uma abordagem organizada para o gerenciamento de dados cruciais para a experiência do hóspede.

## Classe Usuário
Responsavel pelos atributos relacionado ao Usuário como:
- ID, Nome, CPF, Endereço, Telefone e Histórico de Reservas*

- Ver meus dados: Método que exibi no terminal todos os atributos relacionado àquele objeto.
- Modificar meus dados: Método que permite alterar todos os atributos exceto o Id.

*Como ainda trabalhei a classe reserva, optei em não trabalhar com esse atributo ainda já que possivelmente será uma lista.

## Classe Propriedades (0)

## Classe Reserva (0)

## Classe Anúncio (0)

## Classe Sistema 
Responsável por gerenciar as interações entre usuários, propriedades, reservas e anúncios.

### Usuário
- Cadastro: Método que recebes os parametros para criar um novo objeto (usuário) e armazena na lista de Usuarios
- Login: Verifica pelo nome e cpf se o usuário esta cadastrado (na lista).

## Classe Interface 
- Métodos para criar a interface do usuário de forma simples e intuitiva.
- Inputs para obter os valores passado pelo usuário
- Responsável em chamar as funções da classe Sistema que vai instanciar determinado objeto com os inputs recebidos.
