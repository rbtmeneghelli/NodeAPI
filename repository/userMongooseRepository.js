import { GenericMongooseRepository } from "./generic/genericMongooseRepository.js";
import { tbUser } from "../models/userModel.js";

export class UserMongooseRepository extends GenericMongooseRepository {
  
  constructor() {
    super(tbUser);
  }

  async findByActiveUsers(isActive) {
    try {
      return await this.model.find({ isActive });
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }
}
