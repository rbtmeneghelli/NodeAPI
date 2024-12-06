import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import authenticationRoutes from "./routes/authenticationRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import { connectToDatabase } from "./databases/database-connection.js";
import passport from "passport";
import dotenv from "dotenv";
import { constantHttpStatusCode } from "./constants/constantHttpStatusCode.js";
import { constantHttpStatusCodeMessage } from "./constants/constantHttpStatusCodeMessage.js";

dotenv.config();

const app = express();
const PORT = 3000;
const PATH_API = "/api";

// Configuração de Middleware
app.use(express.json());
app.use(passport.initialize());

// Tratamento de erros do Multer
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res
      .status(constantHttpStatusCode.BAD_REQUEST)
      .json({ message: constantHttpStatusCodeMessage.BAD_REQUEST });
  } else if (err) {
    res
      .status(constantHttpStatusCode.BAD_REQUEST)
      .json({ message: constantHttpStatusCodeMessage.BAD_REQUEST });
  } else {
    next();
  }
});

// Configuração de rotas
app.use(PATH_API, tarefaRoutes);
app.use(PATH_API, itemRoutes);
app.use(PATH_API, authenticationRoutes);
app.use(PATH_API, fileRoutes);

// Iniciando o servidor
app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta padrão ${PORT}`);
  //await connectToDatabase('SqlServer');
});
