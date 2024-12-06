import { Item } from "../models/itemModel.js";
import { constantHttpStatusCode } from "../constants/constantHttpStatusCode.js";
import { constantHttpStatusCodeMessage } from "../constants/constantHttpStatusCodeMessage.js";

export const getAllItems = (req, res) => {
  const items = Item.getAll();
  res
    .status(constantHttpStatusCode.OK)
    .json({ data: items, message: constantHttpStatusCodeMessage.OK });
};

export const getItemById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = Item.getById(id);
  if (item) {
    res
      .status(constantHttpStatusCode.OK)
      .json({ data: item, message: constantHttpStatusCodeMessage.OK });
  } else {
    resstatus(constantHttpStatusCode.NOT_FOUND).json({
      message: constantHttpStatusCodeMessage.NOT_FOUND,
    });
  }
};

export const createItem = (req, res) => {
  const newItem = Item.create(req.body);
  res
    .status(constantHttpStatusCode.CREATED)
    .json({ data: newItem, message: constantHttpStatusCodeMessage.CREATED });
};

export const updateItem = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedItem = Item.update(id, req.body);
  if (updatedItem) {
    res
      .status(constantHttpStatusCode.OK)
      .json({ data: updatedItem, message: constantHttpStatusCodeMessage.OK });
  } else {
    res
      .status(constantHttpStatusCode.NOT_FOUND)
      .json({ message: constantHttpStatusCodeMessage.NOT_FOUND });
  }
};

export const deleteItem = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const deletedItem = Item.delete(id);
  if (deletedItem) {
    res
      .status(constantHttpStatusCode.OK)
      .json({ data: deletedItem, message: constantHttpStatusCodeMessage.OK });
  } else {
    res
      .status(constantHttpStatusCode.NOT_FOUND)
      .json({ message: constantHttpStatusCodeMessage.NOT_FOUND });
  }
};
