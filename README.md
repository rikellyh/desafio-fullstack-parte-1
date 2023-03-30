# Desafio Fullstack parte 1 (Kenzie Academy Brasil)
### Esta api trata-se de um sistema para agenda telefônica onde é possível criar uma conta, fazer o login, editar seu perfil, adicionar contatos, editá-los e até deletá-los

As tecnologias usadas foram Node (Express e TypeORM)

- Como iniciar o projeto?
`yarn install`

- Como rodar a aplicação?
`yarn dev`

- Endpoints:

  - POST (criação de usuário): /profile
    - Request
    ```
    {
      "email": "rikellyh1@mail.com",
      "password": "bomdia123",
      "name": "Kelly Mendes",
      "phone_number": "81992440856"
    }
    ```
    - Response
    ```
    {
      "id": "9650a72d-8ac3-48e4-9f13-dd0839c0d5ca",
      "name": "Kelly Mendes",
      "email": "rikellyh1@mail.com",
      "phone_number": "81992440856",
      "createdAt": "2023-03-25T03:50:46.523Z",
      "updatedAt": "2023-03-25T03:50:46.523Z"
    }
    ```
  - POST (login): /login `retorna um token`
    - Request
    ```
    {
      "email": "rikellyh1@mail.com",
      "password": "bomdia123"
    }
    ```
  - PATCH (alteração no perfil de usuário): /profile/:id
    - Request
    ```
    {
      "name": "Rikelly Mendes"
    }
    ```
    - Response
    ```
    {
      "id": "9650a72d-8ac3-48e4-9f13-dd0839c0d5ca",
      "name": "Rikelly Mendes",
      "email": "rikellyh1@mail.com",
      "phone_number": "81992440856",
      "createdAt": "2023-03-25T03:50:46.523Z",
      "updatedAt": "2023-03-29T02:07:58.613Z"
    }
    ```
  - POST (adicionar um contato): /contacts `precisa de token`
    - Request
    ```
    {
      "email": "amigo@mail.com",
      "name": "Um grande amigo",
      "phone_number": "81992489681"
    }
    ```
    - Response
    ```
    {
      "name": "Um grande amigo",
      "email": "amigo@mail.com",
      "phone_number": "81992489681",
      "id": "062acd8b-8bb8-4399-85b2-6665e68f9c8b",
      "createdAt": "2023-03-29T03:02:19.250Z",
      "updatedAt": "2023-03-29T03:02:19.250Z"
    }
    ```
  - GET (listar todos os contatos): /contacts `não precisa de token`
    - Request
      `Sem body`
    - Response
      `Retorna todos os contatos criados`
      
  - GET (listar um único contato): /contacts/:id `precisa de token`
     - Request
        `Sem body`
     - Response
        `Retorna o contato dono do id passado`
  - PATCH (alteração do contato do respectivo id): /contacts/:id `precisa de token`
    - Request
    ```
    {
      "email": "rikelly@hotmail.com"
    }
    ```
    - Response
    ```
    {
      "id": "ec712c74-8d28-46b0-9780-e267f2295bf3",
      "name": "Meu número",
      "email": "rikelly@hotmail.com",
      "phone_number": "81992440856",
      "createdAt": "2023-03-29T02:16:49.256Z",
      "updatedAt": "2023-03-29T19:01:47.113Z"
    }
    ```
  - DELETE (exclusão do contato do respectivo id): /contacts/:id `precisa de token`
    - Request
      `Sem body`
    - Response
      `Sem body e status code 204`
