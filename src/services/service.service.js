const BaseService = require("./base.service");

class ServiceService extends BaseService {
  constructor({ ServiceRepository }) {
    super(ServiceRepository);
  }
}

module.exports = ServiceService;
