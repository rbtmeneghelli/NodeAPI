import express from 'express';
import { listarTarefas, criarTarefa, atualizarTarefa, excluirTarefa } from '../controllers/tarefaController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: "Tarefas"
 *     description: "Operações relacionadas as tarefas"
 */

/**
 * @swagger
 * /api/tarefas:
 *   get:
 *     tags:
 *       - "Tarefas"
 *     summary: "Lista todas as tarefas"
 *     description: "Retorna uma lista de todas as tarefas cadastradas."
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.get('/tarefas', listarTarefas);

/**
 * @swagger
 * /api/tarefas:
 *   post:
 *     tags:
 *       - "Tarefas"
 *     summary: "Cria uma nova tarefa"
 *     description: "Cria uma nova tarefa no sistema."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarefa'
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */
router.post('/tarefas', criarTarefa);

/**
 * @swagger
 * /api/items/{id}:
 *   put:
 *     tags:
 *       - "Tarefas"
 *     summary: "Atualiza uma tarefa existente"
 *     description: "Atualiza as informações de uma tarefa existente."
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "ID da tarefa"
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tarefa'
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
router.put('/tarefas/:id', atualizarTarefa);

/**
 * @swagger
 * /api/tarefas/{id}:
 *   delete:
 *     tags:
 *       - "Tarefas"
 *     summary: "Deleta uma tarefa"
 *     description: "Deleta uma tarefa pelo ID."
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: "ID do tarefa"
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
router.delete('/tarefas/:id', excluirTarefa);

/**
 * @swagger
 * components:
 *   schemas:
 *     Tarefa:
 *       type: object
 *       required:
 *         - descricao
 *         - prazo
 *       properties:
 *         descricao:
 *           type: string
 *         prazo:
 *           type: date
 *       example:
 *         descricao: "Tarefa teste"
 *         prazo: "2024-12-06"
 */

export default router;