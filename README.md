#Documentação ADR

TITULO

NodeAPI

STATUS

Responsável >> Roberto Meneghelli

Criado em 04/12/2024

Atualizado em 06/12/2024

Tempo de entrega >> Nenhum, projeto de escopo aberto

CONTEXTO

O software possui conhecimentos tecnicos e experiencias adquiridas de forma didatica, a partir da minha pós graduação em Arquitetura de Soluções e videos da internet pelo responsavel dessa documentação.

A partir desse software, tenho um modelo de projeto a ser trabalhado no formato de REST API, caso seja necessario criar um projeto do zero.

DECISÃO

Para desenvolvimento desse software foi escolhido as seguintes tecnologias:

NODEJS versão 18.16.1

Arquiterura >> REST API

Modelo de Dominio >> Clean Architeture

Banco de dados >> MongoDb e Sql Server

Linguagem de Programação >> JavaScript

Repositorio de Codigo >> GitHub

Design Pattern >> Repository

Servidor >> Local

Camadas do Projeto >> Constants, Controllers, Databases, Middleware, Models, Repository, Routes, Services

Framework >> Express, Prisma(ORM) e Mongoose(ORM)

Documentação da API >> Swagger

MOTIVO DA DECISÂO

Com base em meu conhecimento didatico durante a minha pós graduação em Arquitetura de Soluções, utilizei as tecnologias e ferramentas descritas acima. 

LIMITAÇÔES

Não possui integração com projeto frontend para teste visual do usuário, somente testes a partir da documentação Swagger ou via postman

O projeto não está publicado em um servidor externo, impossibilitando seu acesso por outros usuarios

No momento não e possivel utilizar o framework Prisma neste projeto, pois a versão do NODEJS não é compativel

CONSEQUÊNCIAS FINAIS

Facilidade de entendimento de codigo

Facilidade de manutenção do banco de dados

Organização das camadas do projeto e pacotes utilizados

PASSOS PARA UTILIZAR

Utilizar uma IDE da sua escolha, recomendo a utilização do VISUAL CODE

Utilizar um SGDB da sua escolha compativel com SQLSERVER ou MONGODB, recomendo a utilização do MICROSOFT MANAGEMENT STUDIO 2017 ou superior, Dbeaver

Ao baixar o projeto por uma ferramenta de repositorio GIT, efetuar um build para validar que tudo esteja OK

Configurar as variaveis de ambiente com os dados de configuração correspondente ao seu ambiente, a partir do arquivo .env que está dentro da pasta do projeto

Abrir o terminal do VISUAL CODE e aplicar o comando npm install para instalar as dependencias necessarias para executar o projeto

OUTRAS INFORMAÇÕES
- Para criar um projeto no modelo NODEJS, basta executar o comando abaixo dentro da pasta do projeto:
npm init -y

- Para executar um projeto em NODEJS, basta executar o comando abaixo:
node server

- Verificar se a propriedade type está incluida no arquivo package.json
Incluir manualmente a opção type: "module"

PRINTS DO SISTEMA

![image](https://github.com/user-attachments/assets/7b6e9133-60a8-4635-86fb-3aed7e68b216)

![image](https://github.com/user-attachments/assets/154af7f8-6226-473b-80e8-e13e3b293440)




