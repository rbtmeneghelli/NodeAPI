import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import authenticationRoutes from "./routes/authenticationRoutes.js";
import { connectToDatabase } from './databases/database-connection.js';
import passport from 'passport';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const PATH_API = '/api';

// Configuração de Middleware
app.use(express.json());
app.use(passport.initialize());

// Configuração de rotas
app.use(PATH_API, tarefaRoutes);
app.use(PATH_API, itemRoutes);
app.use(PATH_API, authenticationRoutes);

// Iniciando o servidor
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta padrão ${PORT}`);
  //await connectToDatabase('SqlServer');
});

