# Projeto Amigo Secreto

![Status](https://img.shields.io/badge/status-concluído-brightgreen)

Uma aplicação web simples e interativa para realizar sorteios de amigo secreto. Os usuários podem adicionar nomes a uma lista e, com um clique, sortear aleatoriamente um dos participantes.

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)

---

## Sobre o Projeto

Este projeto foi desenvolvido como um desafio prático para exercitar manipulação do DOM (Document Object Model) com JavaScript puro. A aplicação permite que um grupo de amigos organize um sorteio de amigo secreto de forma rápida e divertida, diretamente no navegador.

O objetivo principal é criar uma interface intuitiva onde o usuário possa:
1.  Digitar o nome de um amigo.
2.  Adicioná-lo a uma lista visível.
3.  Sortear um nome aleatório da lista para ser o "amigo secreto".

---

## Funcionalidades

-   **Adicionar Nomes:** Campo de texto para inserir o nome dos participantes.
-   **Lista de Participantes:** Exibição em tempo real dos nomes adicionados.
-   **Validação de Entrada:**
    -   Impede a adição de nomes em branco.
    -   Impede a adição de nomes duplicados.
-   **Sorteio Aleatório:** Um botão que seleciona aleatoriamente um nome da lista.
-   **Exibição do Resultado:** O nome sorteado é exibido de forma destacada na tela.
-   **Validação de Sorteio:** Requer um mínimo de dois participantes para que o sorteio possa ser realizado.

---

## Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web fundamentais, sem a necessidade de frameworks.

-   **HTML5:** Para a estrutura e semântica do conteúdo.
-   **CSS3:** Para a estilização e o design da interface.
-   **JavaScript (Vanilla JS):** Para toda a lógica de interatividade, manipulação do DOM e funcionalidades do sorteio.

---

## Como Usar

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório (ou baixe os arquivos):**
    ```bash
    git clone https://github.com/pedro-analytics/challenge-amigo-secreto/tree/main
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd projeto-amigo-secreto
    ```
3.  **Abra o arquivo `index.html`:**
    Basta abrir o arquivo `index.html` no seu navegador de preferência.

E pronto! A aplicação estará funcionando.

---

## Estrutura do Projeto

A estrutura de arquivos do projeto é simples e organizada da seguinte forma:

## Estrutura do Projeto

-   `/projeto-amigo-secreto`
    -   📄 `index.html`
    -   🎨 `style.css`
    -   ⚙️ `app.js`
    -   📂 `assets/`
        -   🖼️ `amigo-secreto.png`
        -   🖼️ `play_circle_outline.png`
    -   📄 `README.md`
