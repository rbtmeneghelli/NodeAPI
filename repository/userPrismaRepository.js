import { GenericPrismaRepository } from "./generic/genericPrismaRepository.js";

export class UserPrismaRepository extends GenericPrismaRepository {
  
  constructor() {
    super("tbUser");
  }

  async findByActiveUsers(isActive) {
    try {
      return await this.model.find({ isActive });
    } catch (error) {
      throw new Error(`${error.message}`);
    }
  }
}
