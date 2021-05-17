const BaseRepository = require("./base.repository");
let _db = null;

class UserRepository extends BaseRepository {
  constructor({ db }) {
    super(db.User);
    _db = db;
  }

  async getUserByUsername(username) {
    return await _db.User.findOne({ where: { username: username } });
  }

  async update(id, entity) {
    return await _db.User.update(entity, { where: { id: id } });
  }
}

module.exports = UserRepository;
