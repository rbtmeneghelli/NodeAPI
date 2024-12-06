import { UserMongooseRepository } from "../repository/userMongooseRepository.js";

export class UserService {
  constructor() {
    this.UserMongooseRepository = new UserMongooseRepository();
  }

  async create(user) {
    try {
      const newUser = await this.UserMongooseRepository.create(user);
      return newUser;
    } catch (error) {
      throw new Error(`Erro ao criar: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const users = await this.UserMongooseRepository.find();
      return users;
    } catch (error) {
      throw new Error(`Erro ao buscar: ${error.message}`);
    }
  }

  async findById(id) {
    try {
      const user = await this.UserMongooseRepository.findById(id);
      if (!user) {
        throw new Error("Registro não encontrado");
      }
      return user;
    } catch (error) {
      throw new Error(`Erro ao buscar por ID: ${error.message}`);
    }
  }

  // Método para atualizar um filme
  async update(id, userUpdated) {
    try {
      const userUpdated = await this.UserMongooseRepository.updateById(
        id,
        dadosAtualizados
      );
      if (!userUpdated) {
        throw new Error("Registro não encontrado para atualização");
      }
      return userUpdated;
    } catch (error) {
      throw new Error(`Erro ao atualizar: ${error.message}`);
    }
  }

  // Método para deletar um filme
  async delete(id) {
    try {
      const userDeleted = await this.UserMongooseRepository.deleteById(id);
      if (!userDeleted) {
        throw new Error("Registro não encontrado para exclusão");
      }
      return userDeleted;
    } catch (error) {
      throw new Error(`Erro ao deletar: ${error.message}`);
    }
  }

  async findByIsActive(isActive) {
    try {
      const users = await this.UserMongooseRepository.findByActiveUsers(isActive);
      return users;
    } catch (error) {
      throw new Error(`Erro ao buscar: ${error.message}`);
    }
  }
}
