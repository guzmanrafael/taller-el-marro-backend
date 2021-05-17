const BaseRepository = require("./base.repository");

class ServiceRepository extends BaseRepository {
  constructor({ db }) {
    super(db.Service);
  }
}

module.exports = ServiceRepository;
