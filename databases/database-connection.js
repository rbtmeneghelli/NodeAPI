import mssql from "mssql";
import {
  getSqlWindowsConfiguration,
  getSqlAuthConfiguration,
} from "./config-sql.js";

export const connectToDatabase = async (databaseType) => {
  try {
    switch (databaseType) {
      case "SqlServer":
        await mssql.connect(getSqlWindowsConfiguration());
        console.log("Conexão com o SQL Server bem-sucedida!");
        break;
      default:
        console.error(`Tipo de banco de dados não suportado: ${databaseType}`);
        break;
    }
  } catch (err) {
    console.error(`Erro ao conectar ao banco de dados ${databaseType}:`, err);
    await mssql.close();
    console.log("Conexão encerrada.");
  }
};
