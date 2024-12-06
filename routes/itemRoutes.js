import express from "express";
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: "Items"
 *     description: "Operações relacionadas aos items"
 */

/**
 * @swagger
 * /api/items:
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
 * /api/items/{id}:
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
 *       404:
 *         description: "O registro solicitado não foi encontrado"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.get("/items/:id", getItemById);

/**
 * @swagger
 * /api/items:
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
 * /api/items/{id}:
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
 *       404:
 *         description: "O registro solicitado não foi encontrado"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.put("/items/:id", updateItem);

/**
 * @swagger
 * /api/items/{id}:
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
 *       404:
 *         description: "O registro solicitado não foi encontrado"
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
 *         - valor
 *       properties:
 *         nome:
 *           type: string
 *         valor:
 *           type: number
 *       example:
 *         nome: "Notebook"
 *         valor: "10000.00"
 */

export default router;
