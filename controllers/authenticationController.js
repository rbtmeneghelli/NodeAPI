import { Authentication } from "../models/authenticationModel.js";
import { constantHttpStatusCode } from "../constants/constantHttpStatusCode.js";
import { constantHttpStatusCodeMessage } from "../constants/constantHttpStatusCodeMessage.js";
import { Token } from "../models/tokenModel.js";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

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
    const tokenCreated = Token.generateToken(payload, SECRET_KEY);
    return res
      .status(constantHttpStatusCode.OK)
      .json({ data: tokenCreated, message: constantHttpStatusCodeMessage.OK });
  }

  return res
    .status(constantHttpStatusCode.BAD_REQUEST)
    .json({ message: "Credenciais inválidas" });
};

export const publicAuth = (req, res) => {
  res.status(constantHttpStatusCode.OK).send("Este endpoint é público");
};

export const protectedAuth = (req, res) => {
  res.status(constantHttpStatusCode.OK).send(`Este é um endpoint protegido.`);
};

export const protectedAuthRoles = (req, res) => {
  res
    .status(constantHttpStatusCode.OK)
    .send(`Este é um endpoint protegido com roles.`);
};
