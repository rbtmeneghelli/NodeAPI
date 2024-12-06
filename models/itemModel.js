const items = []; // Simulação de um banco de dados

export class Item {
  static getAll() {
    return items;
  }

  static getById(id) {
    const index = items.findIndex((item) => item.id === id);
    return index !== -1 ? items[index] : null;
  }

  static create(data) {
    const newItem = { id: items.length + 1, ...data };
    items.push(newItem);
    return newItem;
  }

  static update(id, data) {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...data };
      return items[index];
    }
    return null;
  }

  static delete(id) {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return null;
  }
}
