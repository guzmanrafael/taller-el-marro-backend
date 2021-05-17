const BaseRepository = require("./base.repository");

let _db = null;

class QuotationRepository extends BaseRepository {
  constructor({ db }) {
    super(db.Quotation);
    _db = db;
  }

  async getAll(pageSize = 5, pageNum = 1) {
    const skips = pageSize * (pageNum - 1);
    return await _db.Quotation.findAll({
      offset: skips,
      limit: pageSize,
      order: [["updatedAt", "DESC"]],
      include: _db.Client,
    });
  }
}

module.exports = QuotationRepository;
