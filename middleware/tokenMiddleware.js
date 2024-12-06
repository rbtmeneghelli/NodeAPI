import dotenv from "dotenv";
import { constantHttpStatusCode } from "../constants/constantHttpStatusCode.js";
import { constantHttpStatusCodeMessage } from "../constants/constantHttpStatusCodeMessage.js";
import { Token } from "../models/tokenModel.js";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

const getToken = (req) => {
  if (!SECRET_KEY) {
    throw new Error("A chave secreta (JWT_SECRET_KEY) não está definida.");
  }

  const tokenHeader = req.headers["authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];
  return !!token ? token : "";
};

export const getDecodedToken = (token) => {
  return Token.verifyToken(token, SECRET_KEY);
};

export const validateToken = (req, res, next) => {
  const token = getToken(req);
  if (!token) {
    return res.status(constantHttpStatusCode.UNAUTHORIZED).json({
      message: constantHttpStatusCodeMessage.UNAUTHORIZED,
    });
  }

  try {
    const decodedToken = getDecodedToken(token);
    next();
  } catch (error) {
    return res.status(constantHttpStatusCode.INTERNAL_ERROR).json({
      message: constantHttpStatusCodeMessage.INTERNAL_ERROR,
    });
  }
};

export const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    const decodedToken = getDecodedToken(getToken(req));
    const userRoles = decodedToken.roles;
    if (!userRoles || !allowedRoles.some((role) => userRoles.includes(role))) {
      return res
        .status(constantHttpStatusCode.FORBIDDEN)
        .json({ message: constantHttpStatusCodeMessage.FORBIDDEN });
    }
    next();
  };
};
