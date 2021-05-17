let _serviceService = null;

class ServiceController {
  constructor({ ServiceService }) {
    _serviceService = ServiceService;
  }

  async create(req, res) {
    const { body } = req;
    const createdService = await _serviceService.create(body);
    return res.send(createdService);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const services = await _serviceService.getAll(pageSize, pageNum);
    return res.send(services);
  }

  async get(req, res) {
    const { serviceId } = req.params;
    const service = await _serviceService.get(serviceId);
    return res.send(service);
  }

  async update(req, res) {
    const { body } = req;
    const { serviceId } = req.params;
    const updatedservice = await _serviceService.update(serviceId, body);
    return res.send(updatedservice);
  }

  async delete(req, res) {
    const { serviceId } = req.params;
    const deletedService = await _serviceService.delete(serviceId);
    return res.send(deletedService);
  }
}

module.exports = ServiceController;
