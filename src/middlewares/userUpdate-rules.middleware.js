const { body } = require("express-validator");

module.exports = userValidationRules = () => {
  return [
    // username must be an email
    body("username").isEmail(),
    // password must be at least 5 chars long
    body("password").isLength({ min: 5 }),
    body("newPassword").isLength({ min: 5 }),
  ];
};
