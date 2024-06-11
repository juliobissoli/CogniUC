<h1 align="center"> Cogni UC</h1>

[comment]: <juliobissoli> (Adicione o seu usuário e o nome do repositório)

<p align="center">
  <image
 src="https://img.shields.io/github/languages/count/juliobissoli/energy-manager"  />
  <image
  src="https://img.shields.io/github/languages/top/juliobissoli/energy-manager"
  />
  <image
  src="https://img.shields.io/github/last-commit/juliobissoli/energy-manager"
  />

</p>

## Descrição
Este projeto foi desenvolvido como desafio técnico para o cargo de desenvolvedor front-end na empresa Stormbox. O desafio consistia em montar uma aplicação web de acordo com os mockups passados por eles

### Abordagem
Para desenvolver esse projeto usei duas abordagens diferentes. Uma com dados mockados e sem persistência (ou seja não tem banco de dados, apenas dados em memória), a segunda foi criar uma API que prove dados para o front.

## Tecnologias utilizadas
Para o desenvolvimento deste projeto foi necessária a utilização de várias tecnologias.
### Front
- Tailwind CSS
- Angular (v18)
- TypeScript
- Karma
> Obs.: gostaria de usar a gerencia de estados com o NgRx mas ainda não esta comativel com o Angular 18


### API
- Node.js
- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- Jest
- Swagger


# Como rodar o projeto

Antes de rodar o projeto na sua máquina você deve ter algumas ferramentas instaladas:


### Ambiente
1. Node (na versão >= v20)
Para instalar o Node.js, você pode utilizar o NVM (Node Version Manager). Para isso, siga as instruções em [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).


## Como rodar o projeto
Como o projeto e dividido em doi vamos primeiro rodar o front

### Rodar o front
1. Navegue ate a pasta energi-dashboard-front
```bash
    cd cogni-front

```

2. Instale as dependencias
```bash
npm install
```


3. Rode o projeto em mode dev com a API
```bash
npx ng serve -c api
```

4. Rode o projeto em mode dev (sem o uso da API)
```bash
npx ng serve
```

### Rodar a API

1. Navegue ate a pasta cogni-front
```bash
    cd cogni-api

```
1. Instale as dependências utilizando o comando 

```bash
npm install
```

2. Configure o arquivo `.env` com as informações do banco de dados PostgreSQL, copie os dados do arquivo `.env.example` e cole no seu arquivo `.env`


3. Execute as migrações do banco de dados com o comando 

```bash
 npx prisma migrate dev
 or 
 npx prisma db push --force-reset
```


4. Inicie o servidor local com o comando 
```bash
npm run dev  
or
npm run start
```

### Rodar o  script para ler os dados dos PDF's
Para carregar os dados dos arquivos PDF's que estao salvos na pasta `cogni-api/invoices`
1. Navegue ate a pasta energi-dashboard-api
```bash
cd cogni-api

```
## Testes
Para rodar os testes dasta rodar o comando

```bash
npm run test

```

# Preview
Abaixo tem algumas capturas de telas de como a apicacao com resposividade
## Front
![Tela de Login - Tema Claro](/cogni-front/public/descktop.png)
![Tela de Login - Tema Claro](/cogni-front/public/mobile.png)


# Autoria <a name="id05"></a>

[comment]: <> (Adicione seu nome e função)

<h3 align='center'> Saiba mais sobre mim e meus projetos   <a href="https://juliobissoli.vercel.app/">no meu site</a> </h3>
<h4 align='center'> @juliobissoli • desenvolvedor full-stack </h4>


#

[comment]: <> (Adicione as suas redes sociais e profissionais)

<div  align='center'>

[![Linkedin](https://img.shields.io/badge/LinkedIn-0D1117?style=for-the-badge&logo=linkedin&logoColor=blue)](https://www.linkedin.com/in/julio-bissoli/)
<a href = "mailto:juliobissoli33@gmail.com">
![Gmail](https://img.shields.io/badge/Gmail-0D1117?style=for-the-badge&logo=gmail&logoColor=red)</a>
[![github](https://img.shields.io/badge/Github-0D1117?style=for-the-badge&logo=github&logoColor=fff)](https://github.com/juliobissoli)
</div>