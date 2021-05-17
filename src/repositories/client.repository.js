const BaseRepository = require("./base.repository");

class ClientRepository extends BaseRepository {
  constructor({ db }) {
    super(db.Client);
  }
}

module.exports = ClientRepository;
