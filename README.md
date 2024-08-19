# Simulador de Torres de Hanoi

Este projeto é uma aplicação interativa que simula o famoso problema das Torres de Hanoi. Desenvolvida utilizando Next.js, TypeScript e Material-UI, a aplicação permite aos usuários ajustar o número de discos, visualizar as etapas da solução, e explorar a árvore de recursão por trás do algoritmo. O projeto é ideal para estudantes e entusiastas que desejam entender melhor conceitos como recursão e algoritmos de dividir e conquistar.

## Funcionalidades

- Escolha do número de discos para o problema das Torres de Hanoi
- Visualização passo a passo dos movimentos necessários para resolver o problema
- Iniciar e reiniciar a simulação a qualquer momento
- Exibição da árvore de recursão usada na solução do problema em um modal interativo
- Interface moderna e intuitiva com Material-UI

## Algoritmo de Torres de Hanoi

O algoritmo para resolver o problema das Torres de Hanoi é um exemplo clássico de um algoritmo recursivo de dividir e conquistar. O objetivo é mover uma pilha de discos de uma torre para outra, seguindo regras específicas. A aplicação demonstra este processo passo a passo e também permite a visualização da estrutura recursiva subjacente.

### Funcionamento do Algoritmo

1. **Divisão do Problema**: O problema é recursivamente dividido em subproblemas menores até que a solução seja trivial (mover um único disco).
2. **Resolução Recursiva**: Cada subproblema é resolvido aplicando a mesma lógica, movendo discos entre as torres intermediárias e de destino.
3. **Combinação das Soluções**: As soluções dos subproblemas são combinadas para formar a solução completa, movendo todos os discos da torre de origem para a torre de destino.

### Visualização da Árvore de Recursão

A aplicação inclui uma funcionalidade para visualizar a árvore de recursão que mostra como o problema das Torres de Hanoi é decomposto em subproblemas. Esta árvore é gerada automaticamente com base no número de discos selecionado e pode ser acessada em um modal interativo.

## Como Executar o Projeto

### Pré-requisitos

- Node.js na versão mais atual (22.4.1) instalado
- npm ou yarn instalado

### Passos para Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/viniciusvieira00/hanoi-tower.git
   cd hanoi-tower
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   ou
   ```bash
   yarn dev
   ```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

### Link de Deploy

Você também pode acessar a aplicação diretamente no link de deploy:
[hanoi-tower-one.vercel.app](https://hanoi-tower-one.vercel.app/)

## Estrutura do Projeto

- `pages/index.tsx`: Página principal que exibe a interface do simulador.
- `components/Tower.tsx`: Componente para renderizar as torres e os discos.
- `components/Disk.tsx`: Componente para renderizar um disco individual.
- `components/RecursionTree.tsx`: Componente para visualizar a árvore de recursão.

## Contribuidores do Projeto

- [Vinicius Vieira](https://github.com/viniciusvieira00), Matrícula: 190118059
- [Luciano Machado](https://github.com/Hierophylax), Matrícula: 180126130