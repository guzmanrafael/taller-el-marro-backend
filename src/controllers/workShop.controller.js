let _workShopService = null;

class WorkShopController {
  constructor({ WorkShopService }) {
    _workShopService = WorkShopService;
  }

  async create(req, res) {
    const { body } = req;
    const createdWorkShop = await _workShopService.create(body);
    return res.send(createdWorkShop);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const workShops = await _workShopService.getAll(pageSize, pageNum);
    return res.send(workShops);
  }

  async get(req, res) {
    const { workShopId } = req.params;
    const workShop = await _workShopService.get(workShopId);
    return res.send(workShop);
  }

  async update(req, res) {
    const { body } = req;
    const { workShopId } = req.params;
    const updatedWorkShop = await _workShopService.update(workShopId, body);
    return res.send(updatedWorkShop);
  }

  async delete(req, res) {
    const { workShopId } = req.params;
    const deletedWorkShop = await _workShopService.delete(workShopId);
    return res.send(deletedWorkShop);
  }
}

module.exports = WorkShopController;
