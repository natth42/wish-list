# ✨	Lista de Desejos

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) na versão 17.3.3.

## 📋 Descrição

Esta aplicação permite que os usuários tenham acesso a um catálogo de filmes, onde podem realizar buscas, adicionar filmes à sua lista de desejos e visualizar rankings dos melhores filmes.

A aplicação atualmente está hospedada no GitHub Pages, no link: https://natth42.github.io/wish-list/catalog.

## ⌨️ Desenvolvimento Local

Para executar o projeto localmente, basta digitar `ng serve` ou `npm start` no seu terminal, e um servidor será iniciado em `http://localhost:4200/`. Além disso, a aplicação será atualizada automaticamente sempre que houver alterações nos arquivos.

## 🔧 Automação

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`. Esta é uma funcionalidade de conveniência fornecida pelo Angular CLI.

## ⚙️ Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados na pasta `dist/`.

## 🔩 Executando Testes Unitários

Execute `ng test` ou `npm test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## 📦 Arquitetura

O projeto foi organizado da seguinte forma:

- app
    - core
        - components
    - features
        - feature-a
            - components
            - models
            - pages
            - services
            - models
    - shared
        - components

- O "App" é a estrutura mais global que engloba toda a aplicação.
- O "Core" é onde temos componentes que são utilizados em toda a aplicação, como o cabeçalho e o menu.
- "Features" é onde incluímos nossas páginas e suas estruturas específicas.
- "Shared" é a pasta responsável por componentes, serviços, modelos e tudo o que é compartilhado em toda a aplicação e não é específico da aplicação, como um botão ou componente de paginação.

Essa estrutura de pasta foi criada para facilitar a manutenção e manter a organização de acordo com o crescimento da aplicação.

Além disso este projeto foi desenvolvido pensando em qualidade, por isso altualmente tem um coverage de teste de mais de 80% na aplicação e temos as seguintes notas no lighthouse:
Performance: >80
Acessibilidade: 100
Melhores práticas: >70

## 🛠️ Construído com

- Angular: Este projeto foi construído utilizando Angular 17.
- Jasmine: O Angular traz por padrão o Jasmine, e por isso foi utilizado para criação de testes unitários.
- Micromodal: Micromodal.js é uma biblioteca de modais leve, configurável e compatível com acessibilidade, escrita em JavaScript puro. Foi escolhida para ser utilizada por ser pequena e acessível.
- Tailwind CSS: Para estilização, foi utilizado o Tailwind CSS, um framework CSS de utilidades com diversos tokens de design pre definidos. Foi escolhido pois é uma biblioteca leve, de uso simples e versátil.
- API: A API do [The Movie Database (TMDB)](https://developer.themoviedb.org/docs/getting-started) foi utilizada para a listagem dos filmes, e o LocalStorage foi utilizado para adicionar os filmes na lista de desejos.

## 🚀 Roadmap

A seguir estão alguns dos próximos itens a serem implementados:

- [ ] Melhorias no layout.
- [ ] Adicionar GitHub Actions com etapas de testes unitários, testes end-to-end, Lighthouse e implantação.
- [ ] Suporte à internacionalização.
- [ ] Suporte à microfrontend

Obs: não consegui adicionar suporte ao microfrontend no projeto, mas seria o próximo passo fazer a implementação utilizando o [module federate](https://github.com/angular-architects/module-federation-plugin)