import { constantHttpStatusCode } from "../constants/constantHttpStatusCode.js";

export const uploadFile = async (req, res) => {

  if (!req.file) {
    return res.status(constantHttpStatusCode.BAD_REQUEST).json({
      message: "Nenhum arquivo enviado. Por favor, envie um arquivo.",
    });
  }

  try {
    // Arquivo salvo com sucesso
    res.status(constantHttpStatusCode.OK).json({
      message: "Upload realizado com sucesso!",
      file: req.file,
    });
  } catch (err) {
    res.status(constantHttpStatusCode.BAD_REQUEST).json({
      message: "Erro ao realizar o upload.",
    });
  }
};
