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
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

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

// Definindo as opções do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API',
      version: '1.0.0',
      description: 'Uma descrição da minha API',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          in: 'header', // Essa linha pode ser omitida, pois 'header' é o padrão
          name: 'Authorization', // Essa linha não é suportada no esquema diretamente
          description: 'Insira aqui o token gerado após sua autenticação para acesso aos endpoints restritos',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [], // Aplica o esquema globalmente
      },
    ],
  },
  apis: ['./routes/*.js'], // Aponta para os arquivos com as anotações
};


const swaggerSpec = swaggerJSDoc(options);

// Rota para exibir a documentação
app.use(`${PATH_API}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
