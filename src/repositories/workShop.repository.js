const BaseRepository = require("./base.repository");

class WorkShopRepository extends BaseRepository {
  constructor({ db }) {
    super(db.WorkShop);
  }

  async getAll(pageSize = 5, pageNum = 1) {
    return await this.model.findAll();
  }
}

module.exports = WorkShopRepository;
