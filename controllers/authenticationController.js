import { Authentication } from "../models/authenticationModel.js";
import { constantHttpStatusCode } from "../constants/constantHttpStatusCode.js";
import { Token } from '../models/tokenModel.js';
import dotenv from "dotenv";

dotenv.config();

export const login = (req, res) => {
  const { username, password } = req.body;
  let credenciaisValidas = Authentication.validateCredentialUser(username, password);

  if (credenciaisValidas) {
    const SECRET_KEY = process.env.JWT_SECRET_KEY || 'abc';
    const token = Token.generateToken(req.body, SECRET_KEY);
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
  res.send(`Bem-vindo, ${req.user.username}! Este é um endpoint protegido.`);
};
