# shopper-fullstack-test
### Desenvolvido por Lucas Souza como parte do processo seletivo para a vaga de desenvolvedor Fullstack Jr

## Sobre a aplicação
A aplicação foi desenvolvida utilizando React Vanilla para o frontend e NestJS para o backend. Devido a limitações de tempo não foi possivel dockerizar toda a aplicação, como eu havia planejado inicialmente. Foi necessário reduzir tempo, usado Docker somente para criação do servidor MySQL.
Por se tratar de uma simulação sem grandes preocupações com segurança da informação, não foram criadas variaveis de ambiente ou outras formas de ocultar senhas e informações sensíveis.
#### Sobre as portas
- O servidos MySQL foi cconfigurado para utilizar a porta 3306 do localhost.
- O frontend foi configurado para rodar na porta 5173 do localhost.
- O backend foi configurado para rodar na porta 3001 do localhost.

## Requisitos
Para rodar a aplicação é necessário ter instalado alguma versão do nodeJS, Docker e Docker Compose.

## Como rodar a aplicação
1 - Clone esse repositório com o comando `git clone git@github.com:Lucasteisouza/shopper-fullstack-test.git`
2 - Acesse a pasta com o comando `cd shopper-fullstack-test`
3 - Suba o docker compose com o comando `docker-compose up -d --build`
4 - Acesse a pasta backend `cd backend/`
5 - Instale as dependencias e inicie o servidor backend com o comando `npm i` seguido de `npm run start:dev`
6 - Em outro terminal retorne a pasta root com `cd ..` e acesse a pasta frontend com `cd frontend/`
7 - Instale as dependencias e inicie o servidor frontend com o comando `npm i` seguido de `npm run dev`
8 - Abra uma aba do navegador e acesse http://localhost:5173/ e a aplicação está pronta para uso

### Considerações
Compreendo que essa aplicação esta aquém das minhas capacidades, porém tive problemas pessoais durante o periodo de desenvolvimento e acabei com o tempo bastante comprometido.
Espero que, apesar das falhas, seja possível observar algum potêncial no meu código.
Estou 100% aberto a qualquer feedback que estejam dispostos a fornecer.
Agradeço ao tempo dedicado a mim, espero que gostem.
