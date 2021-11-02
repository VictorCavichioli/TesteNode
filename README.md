<h1 align="center">
  <img alt="NodeSolucx" title="NodeSolucx" src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/solucx.png" width="220px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-clonar">Clonar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  
  
</p>


## 🚀 Tecnologias
Esse projeto foi desenvolvido com as seguintes tecnologias:

- JavaScript
- NodeJS
- Express
- SQLite

## 💻 Projeto

Para alimentar a interface, desconsiderando por enquanto funções de interatividade
com o Front-end, trazem algumas operações necessárias:

1 - Criação do Banco de Dados SQLITE e a TABLE drones para armazenar nossos valores;

2 - Inserir dados na tabela;

3 - Selecionar dados na tabela;

4 - Atualizar dados na tabela;

5 - Deletar dados da tabela;


1 - Para criarmos o banco basta somente rodar no terminar o comando:
```
npm run init-db
```
E será criado o drones.sqlite e a entidade "drones".
<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/create-bd.png" />
</p>

2 - Para inserir dados na tabela basta rodar o comando:
```
npm run insert
```
Levando em consideração as mudanças que queira que sejam feitas nas variáveis,
ele deve retornar a seguinte mensagem:

<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/insert-bd.png" />
</p>

3 - Para selecionar dados na tabela, basta somente escolher o ID do drone e
executar o comando:
```
npm run select
```
E ele deve retornar o seguinte:

<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/select-bd.png" />
</p>

4 - Para atualizar os dados por ID, basta mencionar as mudanças nas variáveis 
e rodar o comando:
```
npm run update
```

E deve retornar no terminal o seguinte:

<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/update-bd.png" />
</p>

Para checar podemos utilizar o Beekeeper e ver o antes e depois utilizando esse mesmo UPDATE:
</br>
<strong>Antes do UPDATE</strong>:
</br>
<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/before-update.png" />
</p>
</br>
<strong>Depois do UPDATE</strong>:
</br>
<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/after-update.png" />
</p>

5 - Para deletar os dados por ID, basta somente escolher o ID do drone e
rodar o seguinte comando:
```
npm run delete
```
E deverá retornar no terminal o seguinte:
<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/delete-bd.png" />
</p>
Utilizando novamente o Beekeeper podemos ver o antes e depois: </br>
</br>
<strong>Antes do DELETE</strong>:
</br>
<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/before-delete.png" />
</p>
</br>
<strong>Depois do DELETE</strong>:
</br>
<p align="center">
  <img src="https://github.com/VictorCavichioli/TesteNode/blob/main/images/after-delete.png" />
</p>

## 🔖 Clonar
1. No GitBash ou Power Shell execute:
```
git init
```
2. Clone o repositório
```
git clone https://github.com/VictorCavichioli/TesteNode
```

