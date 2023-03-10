<h1 align="center">
  <img src="public/blog-icon.png" width="40" />
  Article Blog
</h1>

<p align="center">Plataforma para leitura de atigos.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<div align="center">
  <img alt="Article blog" title="Article blog" src="public/dark-homepage-article-blog.png" />
</div>

<br>

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- React
- TypeScript
- Chakra-ui
- Redux Toolkit
- Vite
- Clean Architecture

## Execute o projeto

1. Clone este repositório `git clone https://github.com/dudunog/article-blog-clean-architecture.git`
2. Entre no diretório do projeto `cd article-blog-clean-architecture`
3. Instale as dependências com `yarn install` ou `npm install`
4. Crie um arquivo .ENV na raiz do projeto e adicione o seguinte ao arquivo: `VITE_API_URL=https://api.beta.mejorconsalud.com/wp-json/mc`
5. Inicie o projeto em modo desenvolvimento com `yarn run dev` ou `npm run dev`

## Sobre o teste técnico
Por que constuí esse projeto com aquelas tecnologias?
  - **React**: É tecnologia obrigatória para a vaga e e porque crio a maioria dos meus projetos nessa tecnologia.
  - **TypeScript**: Pela suas vantagens de tipagem (types, interfaces, generics) e porque não faz sentido criar um projeto em React sem TypeScript em pleno 2023.
  - **Vite**: Porque facilita o desenvolvimento implantando localmente em poucos minutos qualquer aplicação sem precisar criar muita configuração para isso, algo que não acontece com webpack, apesar dele também não ser complicado de entender.
  - **Chakra-ui**: Hoje tenho utilizado o chakra para toda aplicação que venho criando, inclusive profissionalmente.
  - Para gerenciamento de estado, utilizei o **Redux Toolkit** pela sua facilidade de criação de reducers, actions.
  - Também optei por aplicar princípios de **Clean Architecture** a fim de entender na prática a aplicação disso em front-ends.
  - Ao final, fiz o deploy da aplicação no **Netlify**. Com o **Netlify** não foi diferente, a velocidade com que o deploy é feito é o que se destaca. Sem contar que podemos automatizar isso utilizando **Cotinuous Integration (CI)** e deixando ainda mais rápido.

>  This is a challenge by [Coodesh](https://coodesh.com/)
