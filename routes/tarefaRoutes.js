import express from 'express';
import { listarTarefas, criarTarefa, atualizarTarefa, excluirTarefa } from '../controllers/tarefaController.js';

const router = express.Router();

router.get('/tarefas', listarTarefas);
router.post('/tarefas', criarTarefa);
router.put('/tarefas/:id', atualizarTarefa);
router.delete('/tarefas/:id', excluirTarefa);

export default router;