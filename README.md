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

4. Instale as dependências do backend
```
npm install
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

<img width="700" height="600" alt="image" src="https://github.com/user-attachments/assets/be237035-425f-475f-827e-969b745c3d5e" />


A lógica de negócio está implementada na camada de serviço (service) do backend.
```backend/src/domain/services```	

## Questões do desafio
Todas os endpoints estão disponiveis em /docs para pode testar os desafios.

### Questão 01:

Considerando que o json abaixo tem registros de vendas de um time comercial, faça um programa que leia os dados e calcule a comissão de cada vendedor, seguindo a seguinte regra para cada venda:
-	Vendas abaixo de R$100,00 não gera comissão
-	Vendas abaixo de R$500,00 gera 1% de comissão
-	A partir de R$500,00 gera 5% de comissão

<strong>Resposta:</strong>

Endpoint ```GET /vendas/comissao```:

<img width="476" height="403" alt="image" src="https://github.com/user-attachments/assets/b9da2231-3a42-464e-b416-63c213277f75" />

Também exibe o array de vendas por vendedor e cada venda tem seu valor de comissão.

### Questão 02:

Faça um programa onde eu possa lançar movimentações de estoque dos produtos que estão no json abaixo, dando entrada ou saída da mercadoria no meu depósito, onde cada movimentação deve ter:

-	Um número identificador único.
-	Uma descrição para identificar o tipo da movimentação realizada

E que ao final da movimentação me retorne a qtde final do estoque do produto movimentado.

<strong>Resposta:</strong>

Endpoint ```POST /estoque/movimentar```

Exemplo Body: 
```
{
  "produtoId": 101,
  "tipo": "SAIDA",
  "quantidade": 100,
  "descricao": "Compra da fábrica"
}
```

Retorno:

<img width="493" height="312" alt="image" src="https://github.com/user-attachments/assets/2f0e01ae-6c59-4ea7-b407-bd2a6fd95666" />

### Questão 03:

Faça um programa que a partir de um valor e de uma data de vencimento, calcule o valor dos juros na data de hoje considerando que a multa seja de 2,5% ao dia.

<strong>Resposta:</strong>

Endpoint ```POST /finance/calcular-juros```

Exemplo Body: 
```
{
  "valor": 200,
	"dataVencimento": "2025-11-10T21:20:20.000Z"
}
```

Retorno:

<img width="495" height="113" alt="image" src="https://github.com/user-attachments/assets/8e0f62c4-caf0-4e44-ad68-82216e9f89e0" />

