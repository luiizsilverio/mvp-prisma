# MVP-PRISMA

## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre o projeto
Trata-se de uma aplicação simples desenvolvida em React com __Prisma ORM__ e banco de dados PostgreSQL, durante a Live do prof. Diego Fernandes [A Melhor Stack para MVPs: React + Next + Prisma](https://www.youtube.com/watch?v=AuR2tHgy1Y4&list=PL85ITvJ7FLoiBxfZFZSUYBqrCs8khA_I8).<br />
Eu não conhecia a sigla __MVP__ (Minimum Viable Product) que, traduzindo, é um produto minimamente viável, ou seja, uma aplicação simples, com o mínimo de recursos necessários para testar o funcionamento desejado, o que implica na redução do tempo de desenvolvimento.<br />
__Prisma ORM__ realmente facilita trabalhar com banco de dados, e a aplicação em questão demonstra como buscar a informação (Tarefas) e como incluir.<br />


## :hammer_and_wrench: Tecnologias
* __React__ com __Next__
* __Typescript__
* __Prisma ORM__ para acessar um banco de dados __PostgreSQL__
* __Next-Auth__ para fazer autenticação
* __TailwindCSS__ para facilitar a estilização


## :car: Iniciando a aplicação
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
git clone https://github.com/luiizsilverio/mvp-prisma.git

# Execute yarn para instalar as dependências (ou npm install)
yarn

# Informe o CLIENT_ID e SECRET da aplicação no Github no arquivo .env.local

# Informe o caminho do banco de dados no arquivo .env

# Se o banco ainda não existir, rode as migrations com o comando:
yarn prisma migrate dev

# Para iniciar a aplicação em http://localhost:3000
$ yarn dev
```


## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/mvp-prisma/blob/main/public/mvp-prisma.gif)


## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)

