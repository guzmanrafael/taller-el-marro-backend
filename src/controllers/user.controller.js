let _userService = null;

class UserController {
  constructor({ UserService }) {
    _userService = UserService;
  }

  async get(req, res) {
    const { userId } = req.params;
    const user = await _userService.get(userId);
    return res.send(user);
  }

  async update(req, res) {
    const { body } = req;
    const { userId } = req.params;
    const updatedUSer = await _userService.update(userId, body);
    return res.send(updatedUSer);
  }
}

module.exports = UserController;
