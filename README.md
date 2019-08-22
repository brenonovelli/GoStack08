# Bootcamp GoStack 8 - Rocketseat

Este repositório tem como objetivo server de índice e histórico dos projetos desenvolvidos durante o Bootcamp, mas também deve servir para anotações de ferramentas e bibliotecas importantes ou úteis para o desenvolvimento na Stack abordada.

## Sobre o Bootcamp GoStack 

Segundo a definição da RocketSeat o GoStack é um treinamento online, intensivo com foco na prática e produtividade. O GoStack aborda a fundo as tecnologias Node.js, React e React Native bem como as ferramentas necessárias para que seja possa ser feito desde o desenvolvimento até o deploy. Incluindo teste, integração contínua, publicação na lojas e as mais utilizadas bibliotecas e frameworks para ser capaz de enfrentar os desafios reais.

# Node.js
## Bibliotecas / Dependências
* Express - Criação do servidor
* Nodemon - **D** - Reinicia o servidor toda vez que é alterado um arquivo.
* Sucrase - **D** - Permite usar as novas sintaxes do ES dentro do NodeJS.
* Sequelize - Um ORM para NodeJs. Uma espécie de tradutor de códiodos JS para SQL.
* Sequelize-cli - **D** - Interface de linha de comando.
* Jsonwebtoken
* Yup - Object schema validation
* bcryptjs - Lidar com hashs

_**D** - deve ser instalado com a flag '-D' indicando que é uma dependência de desenvolvimento._

## Configurações
* Nodemon:
	* Adicionar "scripts" como o comando "dev" para executar o arquivo de index

* Sequelize-cli:
	* Atalho para criar uma migration
		`yarn sequelize migration:create --name=create-users`
	* Rodar migration
		`yarn sequelize db:migrate`
	* Desfazer migration / Desfazer todas (`:all`)
		`yarn sequelize db:migrate:undo`
	* Desfazer todasmigration
		`yarn sequelize db:migrate:undo:all`



# Exercícios

## Módulos
* [Módulo 01](https://github.com/brenonovelli/GoStack08/tree/master/modulo01)
* [Módulo 02](https://github.com/brenonovelli/GoStack08/tree/master/modulo02)

## Desafios
* [Desafio 01](https://github.com/brenonovelli/GoStack08/tree/master/desafio01)
