import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import { connectToDatabase } from './database-connection.js';

const app = express();
const PORT = 3000;

// Configuração de Middleware
app.use(express.json());

// Configuração de rotas
app.use('/api', tarefaRoutes);
app.use('/api', itemRoutes);

// Iniciando o servidor
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta padrão ${PORT}`);
  //await connectToDatabase('SqlServer');
});

