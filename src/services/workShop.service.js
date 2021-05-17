const BaseService = require("./base.service");

class WorkShopService extends BaseService {
  constructor({ WorkShopRepository }) {
    super(WorkShopRepository);
  }
}

module.exports = WorkShopService;
