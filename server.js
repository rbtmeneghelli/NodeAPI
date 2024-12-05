import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração de Middleware
app.use(express.json());

// Configuração de rotas
app.use("/api", tarefaRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta padrão ${PORT}`);
});
