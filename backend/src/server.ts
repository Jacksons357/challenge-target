import Fastify from "fastify";
import { sequelize } from "./infra/database/sequelize";

const app = Fastify({ logger: true });

app.get("/", async () => {
  return { message: "API is running 🚀" }; 
});

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to SQL Server successfully!");

    await app.listen({
      port: 3333,
      host: "0.0.0.0"
    });

    console.log("Server running on http://localhost:3333");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
