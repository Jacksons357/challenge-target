# Challeng Target Sistemas

## Tecnologias
- Node.js
- SQL Server
- Fastify
- Zod
- Angular
- Sequelize
- Docker

## Como rodar
1. Clone o repositório

```	
git clone https://github.com/Jacksons357/challenge-target.git
cd challenge-target
```

2. Configure .env dentro da pasta backend

```
cd backend
cp .env.example .env
```

3. Suba os containers
```
docker-compose up -d --build
```

4. Adicione as migrations e seeders
```
npm run docker:migrate
npm run docker:seed
```

A API estará disponível em `http://localhost:3333`
E o frontend em `http://localhost:4200`

## Swagger (Docs API)

A documentação da API está disponível em `http://localhost:3333/docs`
(Já é possível testar os desafios através das rotas)

A lógica de negócio está implementada na camada de serviço (service) do backend.
```backend/src/domain/services```	