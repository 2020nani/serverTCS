# ServerTeste
# TCS

Desenvolvido por Hernani Amancio de Almeida


## Executar projeto

Para executar o projeto, sera necessario instalar os seguintes programas em seu computador:

- Nodejs 
- Docker
- Insomnia
- yarn

## Desenvolvimento

Para iniciar o desenvolvimento e necessario clonar o projeto do Github num diretorio de sua preferencia com os seguintes comandos:


- `cd "diretorio de sua preferencia"`
- `git clone https://github.com/2020nani/serverTCS.git`
- `cd serverTCS`


Apos clonar o projeto em seu computador e necessario instalar as dependencias que o projeto utiliza com o seguinte comando:


- `npm install` ou `yarn` caso tenha yarn instalado em sua maquina
- crie um arquivo .env conforme o arquivo.env.example

Crie um container docker para rodar uma imagem mongodb para o banco de dados com o comando

- `docker-compose up`

- Rode o comando docker ps para verificar se o container foi iniciado

- Acesse seu banco de dados na porta 8081 do seu localhost que pedira as variaveis user e password indicadas no arquivo
docker-compose.yml


- user = ME_CONFIG_BASICAUTH_USERNAME
- password = ME_CONFIG_BASICAUTH_PASSWORD


Rode o programa em seu computador na porta 3333 com os seguintes comando

- `npm run dev` ou 
- `yarn dev` caso tenha yarn instalado em sua maquina

# Testes
Testes foram realizados utilizando o programa insomnia
