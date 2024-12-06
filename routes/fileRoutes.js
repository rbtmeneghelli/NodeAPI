import express from "express";
import { validateToken } from "../middleware/tokenMiddleware.js";
import { upload } from "../middleware/uploadMulterConfig.js";
import { uploadFile } from "../controllers/fileController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: "Arquivos"
 *     description: "Operações relacionadas a upload ou download de arquivos"
 */

/**
 * @swagger
 * /api/file/upload:
 *   post:
 *     summary: Faz upload de um arquivo
 *     tags:
 *       - Arquivos
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: O arquivo a ser enviado.
 *     responses:
 *       200:
 *         description: "A ação solicitada foi efetuada com sucesso"
 *       400:
 *         description: "Os parametros de requisição oferecidos estão invalidos para serem processados"
 *       500:
 *         description: "Ocorreu um erro interno durante o processamento da requisição"
 */

router.post("/file/upload", validateToken, upload.single("file"), uploadFile);

export default router;
