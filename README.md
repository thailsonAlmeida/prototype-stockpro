# STOCKPRO
![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

## Dashboard de Gerenciamento de Produtos e Vendas
Este projeto é uma dashboard de gerenciamento de produtos e vendas, desenvolvida utilizando o framework Next.js. A aplicação permite o gerenciamento eficiente de produtos e vendas, oferecendo uma interface amigável e informativa.

## Funcionalidades

- **Gerenciamento de Produtos**:
  - Criação de produtos com valor unitário, quantidade em estoque e status (em estoque ou esgotado).
  
- **Gerenciamento de Vendas**:
  - Registro de vendas que atualizam automaticamente a quantidade disponível em estoque.

- **Dashboard Informativa**:
  - Exibição de informações como receita total, receita do dia, total de vendas, total de produtos em estoque, gráficos de receita dos últimos 14 dias e lista dos produtos mais vendidos.

## Estrutura de Rotas

A aplicação utiliza o **AppRouter** do Next.js para gerenciar as rotas. As páginas são organizadas em arquivos `page.tsx` dentro de pastas específicas, permitindo uma navegação fácil entre as seções da aplicação.

## Layouts

A aplicação possui um layout padrão que inclui uma sidebar, aplicada a todas as páginas, exceto em rotas específicas, como a página de login.

## Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwindcss&logoColor=white)


## Pré-requisitos

Antes de começar, você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/thailsonAlmeida/prototype-stockpro.git
   cd nome-do-repositorio
   ```
   
1. Instale as dependências:
  ```bash
     npm install
  ```

1. Inicie o servidor de desenvolvimento:
  ```bash
     npm run dev
  ```

1. Acesse a aplicação no navegador:
  ```bash
     http://localhost:3000
  ```

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
