import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";

const router = express.Router();

// OK: "A ação solicitada foi efetuada com sucesso",
// CREATED: "O registro foi criado com sucesso",
// BAD_REQUEST: "Os parametros de requisição oferecidos estão invalidos para serem processados",
// UNAUTHORIZED: "Acesso não permitido! O seu token de acesso está invalido ou expirado. Solicite um novo",
// FORBIDDEN: "Acesso negado! você não tem permissão suficiente para solicitar essa ação",
// NOT_FOUND: "O registro solicitado não foi encontrado",
// INTERNAL_ERROR: "Ocorreu um erro interno durante o processamento da requisição",

/**
 * @swagger
 * tags:
 *   - name: "Items"
 *     description: "Operações relacionadas aos items"
 */

/**
 * @swagger
 * /items:
 *   get:
 *     tags:
 *       - "Items"
 *     summary: "Lista todos os itens"
 *     description: "Retorna uma lista de todos os itens cadastrados."
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.get("/items", getAllItems);

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     tags:
 *       - "Items"
 *     summary: "Obtém um item pelo ID"
 *     description: "Retorna os detalhes de um item específico pelo ID."
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "ID do item"
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.get("/items/:id", getItemById);

/**
 * @swagger
 * /items:
 *   post:
 *     tags:
 *       - "Items"
 *     summary: "Cria um novo item"
 *     description: "Cria um novo item no sistema."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.post("/items", createItem);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     tags:
 *       - "Items"
 *     summary: "Atualiza um item existente"
 *     description: "Atualiza as informações de um item existente."
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "ID do item"
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.put("/items/:id", updateItem);

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     tags:
 *       - "Items"
 *     summary: "Deleta um item"
 *     description: "Deleta um item pelo ID."
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "ID do item"
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.delete("/items/:id", deleteItem);

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *       example:
 *         id: 1
 *         nome: "João Silva"
 *         email: "joao@exemplo.com"
 */

export default router;
