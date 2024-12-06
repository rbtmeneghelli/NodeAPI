import { constantHttpStatusCode } from "../constants/constantHttpStatusCode.js";
import { constantHttpStatusCodeMessage } from "../constants/constantHttpStatusCodeMessage.js";

// Array simulando uma lista de tarefas
let tarefas = [];

// Função para listar tarefas
export const listarTarefas = (req, res) => {
  res
    .status(constantHttpStatusCode.OK)
    .json({ data: tarefas, message: constantHttpStatusCodeMessage.OK }); // Retorna a lista de tarefas como JSON
};

// Função para criar uma nova tarefa
export const criarTarefa = (req, res) => {
  const { descricao } = req.body; // Obtém a descrição da nova tarefa do corpo da requisição
  const novaTarefa = { id: tarefas.length + 1, descricao }; // Cria um objeto representando a nova tarefa
  tarefas.push(novaTarefa); // Adiciona a nova tarefa à lista de tarefas
  res
    .status(constantHttpStatusCode.CREATED)
    .json({ data: novaTarefa, message: constantHttpStatusCodeMessage.CREATED }); // Retorna a nova tarefa como JSON, com o status 201 (Created)
};

// Função para atualizar uma tarefa existente
export const atualizarTarefa = (req, res) => {
  const { id } = req.params; // Obtém o ID da tarefa a ser atualizada dos parâmetros da URL
  const { descricao } = req.body; // Obtém a nova descrição da tarefa do corpo da requisição
  const index = tarefas.findIndex((tarefa) => tarefa.id === parseInt(id)); // Encontra o índice da tarefa na lista de tarefas
  if (index !== -1) {
    // Verifica se a tarefa foi encontrada
    tarefas[index].descricao = descricao; // Atualiza a descrição da tarefa
    res
      .status(constantHttpStatusCode.OK)
      .json({
        data: tarefas[index],
        message: constantHttpStatusCodeMessage.OK,
      }); // Retorna a tarefa atualizada como JSON
  } else {
    res
      .status(constantHttpStatusCode.NOT_FOUND)
      .json({ mensagem: constantHttpStatusCodeMessage.NOT_FOUND }); // Retorna um erro 404 se a tarefa não foi encontrada
  }
};

// Função para excluir uma tarefa
export const excluirTarefa = (req, res) => {
  const { id } = req.params; // Obtém o ID da tarefa a ser excluída dos parâmetros da URL
  const index = tarefas.findIndex((tarefa) => tarefa.id === parseInt(id)); // Encontra o índice da tarefa na lista de tarefas
  if (index !== -1) {
    // Verifica se a tarefa foi encontrada
    tarefas.splice(index, 1); // Remove a tarefa da lista de tarefas
    res
      .status(constantHttpStatusCode.OK)
      .json({ mensagem: constantHttpStatusCodeMessage.OK }); // Retorna uma mensagem de sucesso
  } else {
    res
      .status(constantHttpStatusCode.NOT_FOUND)
      .json({ mensagem: constantHttpStatusCodeMessage.NOT_FOUND }); // Retorna um erro 404 se a tarefa não foi encontrada
  }
};
