import express from "express";
import {
  login,
  publicAuth,
  protectedAuth,
  createUser,
} from "../controllers/authenticationController.js";
import {
  validateToken,
  authorizeRoles,
} from "../middleware/tokenMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: "Autenticação"
 *     description: "Operações relacionadas as Autenticação"
 */

/**
 * @swagger
 * /api/authentication/login:
 *   post:
 *     tags:
 *       - "Autenticação"
 *     summary: "Autenticação do usuário"
 *     description: "Retorna um token de autenticação para acesso a funcionalidades restritas"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Autenticacao'
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.post("/authentication/login", login);

/**
 * @swagger
 * /api/authentication/public:
 *   get:
 *     tags:
 *       - "Autenticação"
 *     summary: "Endpoint de acesso publico"
 *     description: "Retorna uma mensagem simples apenas"
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.get("/authentication/public", publicAuth);

/**
 * @swagger
 * /api/authentication/protected:
 *   get:
 *     tags:
 *       - "Autenticação"
 *     summary: "Endpoint de acesso restrito a usuários autenticados"
 *     description: "Retorna uma mensagem simples apenas"
 *     security:
 *       - bearerAuth: []  # Especifica que essa rota requer autenticação
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.get("/authentication/protected", validateToken, protectedAuth);

/**
 * @swagger
 * /api/authentication/protectedRole:
 *   get:
 *     tags:
 *       - "Autenticação"
 *     summary: "Endpoint de acesso restrito a usuários autenticados com proteção de role"
 *     description: "Endpoint de acesso restrito a usuários autenticados e com role necessaria para visualizar o endpoint"
 *     security:
 *       - bearerAuth: []  # Especifica que essa rota requer autenticação
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.get(
  "/authentication/protectedRole",
  validateToken,
  authorizeRoles(["user", "admin"]),
  protectedAuth
);


/**
 * @swagger
 * /api/authentication/create:
 *   post:
 *     tags:
 *       - "Autenticação"
 *     summary: "Criação de usuário"
 *     description: "Efetua a criação do usuário no sistema"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.post(
  "/authentication/create",
  validateToken,
  authorizeRoles(["admin"]),
  createUser
);

//router.get('/authentication/protected', authenticate, protectedAuth);

/**
 * @swagger
 * components:
 *   schemas:
 *     Autenticacao:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         username: "admin"
 *         password: "senha123"
 *     Usuario:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         name: "admin"
 *         email: "admin@gmail.com"
 *         password: "senha123"
 */

export default router;
