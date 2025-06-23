# Documentação do Projeto RVL Landing Page

Este documento detalha as tecnologias, arquitetura, padrões de design e otimização para mecanismos de busca (SEO) utilizados no projeto RVL Landing Page, com uma linguagem clara e menos técnica, sem o uso de analogias.


## Intruções para rodar o código
```bash
npm install          # Instala todas as dependências
npm run dev          # Roda o projeto
```

## 1. Tecnologias Utilizadas

O projeto RVL Landing Page é construído com as seguintes tecnologias:

### 1.1. Linguagens de Programação

*   **JavaScript:** É a linguagem principal utilizada para o desenvolvimento do frontend, permitindo a criação de funcionalidades interativas e dinâmicas no site.

### 1.2. Ferramentas e Bibliotecas Principais

*   **Vue.js (versão 3.x):** Um framework progressivo para a construção de interfaces de usuário. Ele permite organizar o desenvolvimento da parte visual do site em componentes reutilizáveis, facilitando a criação e manutenção.
*   **Vite (versão 6.3.5):** Uma ferramenta de build que otimiza o processo de desenvolvimento e a preparação do site para publicação. Ela proporciona um ambiente de desenvolvimento rápido e eficiente.
*   **Vue Router (versão 4.5.1):** Responsável por gerenciar a navegação entre as diferentes seções ou "páginas" da aplicação. Ele permite que o usuário se mova pelo site sem a necessidade de recarregar a página inteira a cada clique.
*   **PrimeVue (versão 3.53.1):** Uma biblioteca de componentes de interface de usuário (UI) pré-construídos para Vue.js. Esses componentes, como botões e formulários, agilizam o desenvolvimento e garantem uma aparência consistente. O tema 'Aura' é utilizado para estilizar esses componentes.
*   **PrimeIcons (versão 7.0.0):** Uma biblioteca de ícones que complementa o PrimeVue, adicionando elementos visuais para melhorar a usabilidade e o design do site.

### 1.3. Ferramentas de Estilização

*   **Tailwind CSS (versão 3.4.17):** Um framework CSS que permite estilizar o site de forma eficiente usando classes utilitárias diretamente no código HTML. Isso agiliza o processo de design e mantém a consistência visual.
*   **PostCSS (versão 8.5.6):** Uma ferramenta para processar e transformar o código CSS, permitindo o uso de plugins para otimização e compatibilidade.
*   **Autoprefixer (versão 10.4.21):** Um plugin PostCSS que adiciona automaticamente prefixos de navegador ao CSS, garantindo que o site funcione corretamente em diferentes navegadores.

### 1.4. Outras Ferramentas Importantes

*   **Node.js:** Um ambiente de execução JavaScript que é essencial para o funcionamento das ferramentas de desenvolvimento do projeto, como a instalação de bibliotecas e a execução de scripts de build.
*   **npm/yarn:** Gerenciadores de pacotes utilizados para instalar, atualizar e organizar as dependências e bibliotecas necessárias para o projeto.


## 2. Arquitetura do Projeto

O projeto RVL Landing Page utiliza uma arquitetura de Single Page Application (SPA) com uma estrutura modular e baseada em componentes. A organização do código é feita de forma a agrupar funcionalidades relacionadas, facilitando o desenvolvimento e a manutenção.

### 2.1. Estrutura de Pastas

*   **`public/`**: Contém arquivos estáticos que são diretamente acessíveis pelo navegador, como o `index.html`.
*   **`src/`**: Contém o código-fonte principal da aplicação.
    *   **`assets/`**: Armazena recursos estáticos como imagens e fontes.
    *   **`components/`**: Contém componentes Vue.js reutilizáveis que formam a interface do usuário.
    *   **`pages/`**: Contém os componentes Vue.js que representam as diferentes visualizações ou "páginas" da aplicação. Cada pasta dentro de `pages/` corresponde a uma funcionalidade ou seção específica do site.
    *   **`router/`**: Contém a configuração do Vue Router, que define as rotas da aplicação e mapeia URLs para os componentes de página correspondentes.
    *   **`styles/`**: Contém arquivos CSS globais e configurações de estilo, incluindo a configuração do Tailwind CSS e estilos de fontes.
    *   **`main.js`**: É o ponto de entrada da aplicação, onde o aplicativo Vue é inicializado, o roteador é configurado e outros elementos globais são registrados.
    *   **`App.vue`**: É o componente raiz da aplicação, responsável por carregar e exibir os outros componentes e as rotas.

### 2.2. Arquitetura Baseada em Features

Este projeto adota uma organização de código baseada em features (funcionalidades). Isso significa que, em vez de agrupar arquivos por tipo (por exemplo, todos os componentes em uma pasta, todas as rotas em outra), os arquivos são agrupados por funcionalidade. Por exemplo, a funcionalidade principal desta landing page está agrupada na pasta `pages/Landing/`.

Essa abordagem oferece os seguintes benefícios:

*   **Localização de Código:** Facilita a localização de todo o código relacionado a uma funcionalidade específica.
*   **Manutenibilidade:** Simplifica a manutenção, pois as alterações em uma funcionalidade são contidas em seu próprio diretório.
*   **Escalabilidade:** Permite adicionar novas funcionalidades de forma organizada, sem impactar outras partes do projeto.

### 2.3. Fluxo de Dados e Navegação

*   **Componentes:** A interface é construída a partir de componentes Vue.js que se comunicam entre si. Dados podem ser passados de componentes "pai" para "filho" e eventos podem ser emitidos de "filho" para "pai".
*   **Roteamento:** O Vue Router gerencia a navegação, permitindo que o usuário transite entre as diferentes seções do site de forma fluida, sem recarregamento completo da página.


## 3. Padrões de Design

O projeto RVL Landing Page utiliza padrões de design que ajudam a organizar o código de forma eficiente e compreensível.

### 3.1. Arquitetura Baseada em Componentes

*   **Descrição:** Este padrão organiza a interface do usuário em partes independentes e reutilizáveis, chamadas componentes. Cada componente contém seu próprio código HTML, CSS e JavaScript. Isso promove a modularidade, a reutilização de código e facilita a manutenção.
*   **Aplicação no Projeto:** A estrutura de pastas `src/components/` e `src/pages/` reflete este padrão, onde cada arquivo `.vue` representa um componente ou uma página (que é um tipo de componente).

### 3.2. MVVM (Model-View-ViewModel)

*   **Descrição:** Este padrão separa a interface do usuário (View) da lógica de negócios (Model). O Vue.js atua como o ViewModel, que é uma camada intermediária que conecta a View e o Model, garantindo que as atualizações de dados sejam refletidas na interface e vice-versa.
*   **Aplicação no Projeto:** A reatividade do Vue.js, onde as alterações nos dados são automaticamente refletidas na interface, demonstra a aplicação deste padrão. A lógica de apresentação e os dados são separados da interface do usuário.

### 3.3. Padrão Observador

*   **Descrição:** O padrão Observador estabelece uma relação onde, quando um objeto muda de estado, todos os objetos que dependem dele são notificados e atualizados automaticamente.
*   **Aplicação no Projeto:** O sistema de reatividade do Vue.js é uma implementação do padrão Observador. Quando os dados de um componente são alterados, o Vue detecta essas mudanças e atualiza o DOM, mantendo a interface do usuário sincronizada com o estado da aplicação.


## 4. Elementos de SEO no `index.html`

O arquivo `index.html` contém elementos fundamentais para o SEO:

*   **Tag `<title>`:** O título da página (`<title> Revelare Landing Page </title>`) é exibido na aba do navegador e nos resultados de busca. É um fator importante para a relevância da página.
*   **Meta Tag `charset`:** (`<meta charset="UTF-8" />`) Define a codificação de caracteres do documento, assegurando a correta exibição do texto. Isso contribui para uma boa experiência do usuário, o que indiretamente afeta o SEO.
*   **Meta Tag `viewport`:** (`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`) Garante que o site se adapte a diferentes tamanhos de tela, tornando-o responsivo. A responsividade é um fator de ranqueamento crucial para mecanismos de busca, especialmente em dispositivos móveis.
*   **Favicon:** (`<link rel="shortcut icon" type="image/svg+xml" href="https://www.revelare.com.br/img/seo/rev-favicon.png" />`) O ícone do site, embora não seja um fator de ranqueamento direto, melhora a identificação visual do site e a experiência do usuário.

