import mssql from "mssql";
import dotenv from "dotenv";

dotenv.config();

const getSqlWindowsConfiguration = () => {
  const dbConfig = {
    driver: 'msnodesqlv8',
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    authentication: {
      type: 'ntlm',
    },
    options: {
      trustedConnection: true,
      useUTC: true
    },
  };
  return dbConfig;
};


const getSqlAuthConfiguration = () => {
  const dbConfig = {
    user: process.env.DB_USER, // Usuário do banco de dados
    password: process.env.DB_PASSWORD, // Senha do banco de dados
    server: process.env.DB_SERVER, // Servidor do banco (ex: localhost, IP ou nome DNS)
    database: process.env.DB_DATABASE, // Nome do banco de dados
    options: {
      encrypt: true, // Para Azure (false no local)
      trustServerCertificate: true, // Somente para desenvolvimento
    },
  };
  return dbConfig;
};

export const connectToDatabase = async (databaseType) => {
  try 
  {
    switch (databaseType) {
      case "SqlServer":
        await mssql.connect(getSqlWindowsConfiguration());
        console.log("Conexão com o SQL Server bem-sucedida!");
        break;
      default:
        console.error(`Tipo de banco de dados não suportado: ${databaseType}`);
        break;
    }
  } 
  catch (err) 
  {
    console.error(`Erro ao conectar ao banco de dados ${databaseType}:`, err);
    await mssql.close();
    console.log("Conexão encerrada.");
  }
};
