import { Item } from '../models/itemModel.js';

export const getAllItems = (req, res) => {
  const items = Item.getAll();
  res.json(items);
};

export const getItemById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = Item.getById(id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item não encontrado.' });
  }
};

export const createItem = (req, res) => {
  const newItem = Item.create(req.body);
  res.status(201).json(newItem);
};

export const updateItem = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedItem = Item.update(id, req.body);
  if (updatedItem) {
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: 'Item não encontrado.' });
  }
};

export const deleteItem = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedItem = Item.delete(id);
  if (deletedItem) {
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item não encontrado.' });
  }
};