class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return await this.model.findByPk(id);
  }

  async getAll(pageSize = 5, pageNum = 1) {
    return await this.model.findAll({
      order: [["updatedAt", "DESC"]],
    });
  }

  async create(entity) {
    return await this.model.create(entity);
  }

  async update(id, entity) {
    return await this.model.update(entity, { where: { id: id } });
  }

  async delete(id) {
    await this.model.destroy({ where: { id: id } });
    return true;
  }
}

module.exports = BaseRepository;
