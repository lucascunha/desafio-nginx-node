# desafio-nginx-node

Nesse desafio eu pude colocar em prática o que aprendi em relação a utilização do nginx como proxy reverso, além de poder aplicar todo o conhecimento que obtive quanto à utilização do docker, docker-compose, volumes, etc.

Estou criando 3 containers:
- app - minha aplicação desenvolvida em node.js
- db - meu banco de dados mysql
- nginx - que servirá de proxy reverso, recebendo as chamadas na porta 8080 e redirecionando para a aplicação e depois devolvendo a resposta para o usuário no navegador.


A idéia principal é que quando um usuário acessar o nginx na porta 8080, este último fará uma chamada em nossa aplicação node.js que roda na porta 3000. Essa aplicação por sua vez adicionará um registro em nosso banco (Lucas) de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

O docker-compose foi gerado de uma forma que basta rodar: "docker-compose up -d" que tudo deverá estar funcionando e disponível na porta: 8080.