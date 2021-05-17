const BaseService = require("./base.service");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getUserByUsername(username) {
    return await _userRepository.getUserByUsername(username);
  }

  async update(id, user) {
    const { username, password, newPassword } = user;
    const userExist = await this.getUserByUsername(username);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exists";
      throw error;
    }

    const validPassword = compareSync(password, userExist.password);
    if (!validPassword) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid Password";
      throw error;
    }

    const hashPassword = hashSync(newPassword, genSaltSync(10));

    delete user.newPassword;
    user.password = hashPassword;

    return await _userRepository.update(userExist.id, user);
  }
}

module.exports = UserService;
