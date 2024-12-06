import { Authentication } from "../models/authenticationModel.js";
import { constantHttpStatusCode } from "../constants/constantHttpStatusCode.js";
import { constantHttpStatusCodeMessage } from "../constants/constantHttpStatusCodeMessage.js";
import { Token } from "../models/tokenModel.js";
import dotenv from "dotenv";
import { UserService } from "../services/userService.js";

dotenv.config();
const userService = new UserService();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

export const login = async (req, res) => {
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
    return res.status(constantHttpStatusCode.OK).json({
      data: tokenCreated,
      message: constantHttpStatusCodeMessage.OK,
    });
  }

  return res
    .status(constantHttpStatusCode.BAD_REQUEST)
    .json({ message: "Credenciais inválidas" });
};

export const publicAuth = async (req, res) => {
  res.status(constantHttpStatusCode.OK).send("Este endpoint é público");
};

export const protectedAuth = async (req, res) => {
  res.status(constantHttpStatusCode.OK).send(`Este é um endpoint protegido.`);
};

export const protectedAuthRoles = async (req, res) => {
  res
    .status(constantHttpStatusCode.OK)
    .send(`Este é um endpoint protegido com roles.`);
};

export const createUser = async (req, res) => {
  await userService.create(req.body);
  return res
    .status(constantHttpStatusCode.CREATED)
    .json({ data: req.body, message: constantHttpStatusCodeMessage.CREATED });
};
