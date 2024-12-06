import mongoose from "mongoose";

export class GenericMongooseRepository {
  constructor(model) {
    if (!model || !(model.prototype instanceof mongoose.Model)) {
      throw new Error(
        "A valid Mongoose model is required to initialize the repository."
      );
    }
    this.model = model;
  }

  async create(data) {
    try {
      const record = new this.model(data);
      return await record.save();
    } catch (error) {
      throw new Error(`Error creating: ${error.message}`);
    }
  }

  async find(query = {}, projection = null, options = {}) {
    try {
      return await this.model.find(query, projection, options);
    } catch (error) {
      throw new Error(`Error finding: ${error.message}`);
    }
  }

  async findById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      throw new Error(`Error finding by ID: ${error.message}`);
    }
  }

  async updateById(id, data, options = { new: true }) {
    try {
      return await this.model.findByIdAndUpdate(id, data, options);
    } catch (error) {
      throw new Error(`Error updating by ID: ${error.message}`);
    }
  }

  async deleteById(id) {
    try {
      return await this.tb.findByIdAndRemove(id);
    } catch (error) {
      throw new Error(`Error deleting by ID: ${error.message}`);
    }
  }
}
