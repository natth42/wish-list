# WishList

Este projeto foi gerado utilizando [Angular CLI](https://github.com/angular/angular-cli) versäo 17.3.3.

## Descritivo

Projeto que contem uma aplicacao onde se tem um catalogo de filmes e e possivel buscar filmes e adiciona-los a sua lista de desejo e ver os rankings de melhores filmes.

## Desenvolvimento local

Para rodar o projeto local basta rodar `ng serve` ou `npm start` em seu terminal e um servidor sera iniciado no endereco `http://localhost:4200/`. Alem disso a aplicacao sera automaticamente atualizada se houver qualquer mudanca nos seus arquivos.

## Automatizacao

Rode `ng generate component nome-do-componente` para gerar um novo componente. Voce tambem pode utilizar `ng generate directive|pipe|service|class|guard|interface|enum|module`. Esta e uma facilidade que o proprio angular cli nos oferece.

## Build

Rode `ng build` para fazer o build do projeto. Os artefatos do build seräo salvos na pasta `dist/`.

## Rodando testes unitarios

Rode `ng test` ou `npm test` para executar os testes unitarios pelo [Karma](https://karma-runner.github.io).

## Estrutura de pastas

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

- App é a estrutura mais global que engloba toda a aplicação
- Core é a estrutura onde temos componentes que são utilizados em toda a aplicação como o header e menu
- Features é onde incluimos nossas páginas e suas estruturas especificas
- Shared é a pasta responsável por componentes, services, models e tudo o que for compartilhado entre toda a aplicação e não é expecifico da aplicação, por exemplo um botão ou componente de paginação.

