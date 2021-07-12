![](https://i.imgur.com/xG74tOh.png)

# Desafio | Front-end - Módulo 2

O objetivo deste exercício é replicar [essa página](https://desafio-2-front-cubos-academy.netlify.app), encontrada no arquivo 'Desafio 2 - Front-end.fig'.

## Funcionalidades obrigatórias
- **Header**
  - **Input de busca**
    - Ao clicar na lupa ou apertar a tecla `Enter` deverá filtrar os filmes por **nome**
- **Seção de Top Filmes**
  - A seção de Top Filmes deve exibir os 5 primeiros filmes que retornarem [desta API](https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR) (antes de integrar com a API por fetch, utilize o arquivo `data.js`)
- **Seção de Filmes**
  - A seção de Filmes deve exibir todos os filmes da lista que retornarem [desta API](https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR) (antes de integrar com a API por fetch, utilize o arquivo `data.js`)
- **Sacola**
  - Adição/remoção de filmes
  - Deverá exibir o total da soma de todos os filmes adicionados
  - Ao clicar no botão de "sacola" dentro de um filme, esse filme deve ser adicionado à sacola
      - Caso ele não esteja na sacola, adicione-o com quantidade 1
      - Caso ele esteja na sacola, aumente a quantidade em 1
## Funcionalidades não obrigatórias
- **Conceitos**
  - Não usar estado quando uma variável bastaria
  - Componentização e organização de código
- **Funcionalidades**
  - Controlar o estado das requisições (erros e carregamento)

## Retorno da API
A API precisa de uma requisição GET padrão, sem headers e body.

Os únicos campos necessários da [API](https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR) são os seguintes:
```json
  {
    "title": "Mortal Kombat",
    "poster_path": "https://image.tmdb.org/t/p/original/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg",
    "vote_average": 9,
    "price": 7.5
  }
```

## Aulas úteis:
- [CRA](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/13/05/2021/aula/2b0e6501-ea94-4d6e-bc38-6f6120906bdc/300fc4ac-3f49-461f-b0dd-bf82b5ab028e)
- [Desestruturação e Skip](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/18/05/2021/aula/51265e70-41ae-4fa9-a210-58233faafbdb/f5a0c1b4-74ce-4743-9d8a-0ff270a25494)
- [Operador Spread](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/18/05/2021/aula/51265e70-41ae-4fa9-a210-58233faafbdb/91643666-6c48-44cc-907c-2a2e45620a79)
- [Transformando um projeto comum em um projeto React](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/18/05/2021/aula/51265e70-41ae-4fa9-a210-58233faafbdb/8cb5b1a5-2a9c-4b28-a7dc-4062dbf899ec)
- [Importância do Estado](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/25/05/2021/aula/843faa8e-6df2-489f-bb71-34dc753f99b4/0c23d0ed-8f18-4453-87d9-c0e2a2519594)
- [Eventos no React](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/25/05/2021/aula/843faa8e-6df2-489f-bb71-34dc753f99b4/8310676e-40e5-4e01-bf09-bbc3dd0c1c43)
- [Hooks e useState](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/25/05/2021/aula/843faa8e-6df2-489f-bb71-34dc753f99b4/71ddc73f-3045-4f13-9b08-b6676442afd7)
- [useEffect](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/01/06/2021/aula/0fcdc99b-f93c-474c-a384-2ef86d1df9e2/481bcdb7-a267-4966-9d21-1956411f5990)
- [Componentização](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/01/06/2021/aula/0fcdc99b-f93c-474c-a384-2ef86d1df9e2/1ceb1190-b936-460a-815c-07ee154f9096)
- [Fetch API](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/03/06/2021/aula/434c58b2-88f1-43fb-856a-71d6ef54803d/7b6e912f-dab4-434f-845c-2fbe489ee987)
- [React - Masterizando os conhecimentos](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/08/06/2021/aula/648a5236-76bd-4a9c-88e8-28e1940a2564/bbf2370e-a5b4-4ff0-b1b9-19fede5f8ac3)
- [React - Masterizando os conhecimentos com Exercícios](https://plataforma.cubos.academy/curso/61b2921e-a262-4f04-b943-89c4cfb15e5c/data/10/06/2021/aula/2a2dd0d8-149b-4f6a-a80d-d8ffe8ef8017/b43a9221-a518-4901-abb3-114efc80a97a)

**LEMBRE-SE**: é melhor feito do quê perfeito!!!

###### tags: `front-end` `módulo 2` `React` `CSS` `desafio`
