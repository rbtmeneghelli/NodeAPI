// import {PrismaClient } from '@prisma/client';

export class GenericPrismaRepository {

  constructor(modelName) {
    /* ModelName e o nome do schema/tabela criada */
    // this.prisma = new PrismaClient();
    // this.model = this.prisma[modelName];
    // if (!this.model) {
    //   throw new Error(`Modelo "${modelName}" não encontrado no Prisma Client.`);
    // }
  }

  // async create(data) {
  //   return await this.model.create({ data });
  // }

  // async findAll(filter = {}) {
  //   return await this.model.findMany({ where: filter });
  // }

  // async findById(id) {
  //   return await this.model.findUnique({ where: { id } });
  // }

  // async update(id, data) {
  //   return await this.model.update({
  //     where: { id },
  //     data,
  //   });
  // }

  // async delete(id) {
  //   return await this.model.delete({ where: { id } });
  // }

  // async disconnect() {
  //   await this.prisma.$disconnect();
  // }
}
