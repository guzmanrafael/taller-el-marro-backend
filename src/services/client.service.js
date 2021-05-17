const BaseService = require("./base.service");

class ClientService extends BaseService {
  constructor({ ClientRepository }) {
    super(ClientRepository);
  }
}

module.exports = ClientService;
