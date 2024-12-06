import { Authentication } from "../models/authenticationModel.js";
import { constantHttpStatusCode } from "../constants/constantHttpStatusCode.js";
import { Token } from "../models/tokenModel.js";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY || "abc";

export const login = (req, res) => {
  const { username, password } = req.body;
  const userRoles = ["admin"];

  let credenciaisValidas = Authentication.validateCredentialUser(
    username,
    password
  );

  if (credenciaisValidas) {
    const payload = {
      username: username,
      password: password,
      roles: userRoles,
    };
    const token = Token.generateToken(payload, SECRET_KEY);
    return res.status(constantHttpStatusCode.OK).json({ token });
  }

  return res
    .status(constantHttpStatusCode.BAD_REQUEST)
    .json({ message: "Credenciais inválidas" });
};

export const publicAuth = (req, res) => {
  res.send("Este endpoint é público");
};

export const protectedAuth = (req, res) => {
  res.send(`Bem-vindo, ${req.username}! Este é um endpoint protegido.`);
};

export const protectedAuthRoles = (req, res) => {
  res.send(
    `Bem-vindo, ${req.username}! Este é um endpoint protegido com roles.`
  );
};

export const validateToken = (req, res, next) => {
  const tokenHeader = req.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: "xpto",
    });
  }

  try {
    console.log(token);
    const a = Token.verifyToken(token, SECRET_KEY);
    console.log(a);
    next();

    //   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    //     if (err) {
    //         return res.status(403).json({ message: 'Token inválido' });
    //     }
    //     req.user = user;
    //     next();
    // });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      message: "Ocorreu um erro interno na API",
    });
  }
};

export const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];
    const decodedToken = Token.verifyToken(token, SECRET_KEY);
    const userRoles = decodedToken.roles;
    if (!userRoles || !allowedRoles.some((role) => userRoles.includes(role))) {
      return res
        .status(403)
        .json({ message: "Acesso negado: permissões insuficientes" });
    }
    next();
  };
};
