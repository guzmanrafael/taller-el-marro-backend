const { generateToken } = require("../helpers/jwt.helper");
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

let _userService = null;

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async signUp(user) {
    const { username, password } = user;
    const userExist = await _userService.getUserByUsername(username);

    if (userExist) {
      const error = new Error();
      error.status = 400;
      error.message = "User already exists";
      throw error;
    }

    const hashPassword = hashSync(password, genSaltSync(10));

    user.password = hashPassword;
    return await _userService.create(user);
  }

  async signIn(user) {
    const { username, password } = user;
    const userExist = await _userService.getUserByUsername(username);

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

    const userToEncode = {
      username: userExist.username,
      id: userExist.id,
    };

    const token = generateToken(userToEncode);
    return { token, user: userToEncode };
  }
}

module.exports = AuthService;
