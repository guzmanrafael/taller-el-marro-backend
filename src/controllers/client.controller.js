let _clientService = null;

class ClientController {
  constructor({ ClientService }) {
    _clientService = ClientService;
  }

  async create(req, res) {
    const { body } = req;
    const createdClient = await _clientService.create(body);
    return res.send(createdClient);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const clients = await _clientService.getAll(pageSize, pageNum);
    return res.send(clients);
  }

  async get(req, res) {
    const { clientId } = req.params;
    const client = await _clientService.get(clientId);
    return res.send(client);
  }

  async update(req, res) {
    const { body } = req;
    const { clientId } = req.params;
    const updatedClient = await _clientService.update(clientId, body);
    return res.send(updatedClient);
  }

  async delete(req, res) {
    const { clientId } = req.params;
    const deletedClient = await _clientService.delete(clientId);
    return res.send(deletedClient);
  }
}

module.exports = ClientController;
