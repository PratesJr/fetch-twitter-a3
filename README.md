## Autor: Marcelo



### Utilize as mesmas versões para executar o servidor de desenvolvimento

  - Yarn  **1.22**
  - NestJs **7.6.0**
  - Docker Compose  **1.22.0**
  - Docker **19.03.14**
  - Node **16.15.1**  
  


### Caso o .env nao esteja versionado, copie o e.env.example e  altere para .env  


### Após instaladas as dependencias, rode os seguintes comandos
  - `docker-compose up` para  subir o container com o banco postgres
  - `yarn` para que o sistema instale as dependencias
  - `yarn sequelize db:migrate` para que as migrations rodem e o banco seja criado
  - `yarn sequelize db:seed:all` para popular o banco com as formas de pagamento
  
  - `yarn start:dev` para rodar o sistema em modo de desenvolvimento
