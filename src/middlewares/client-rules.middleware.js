const { body } = require("express-validator");

module.exports = clientValidationRules = () => {
  return [
    body("name").exists().notEmpty().withMessage("name is required"),
    body("email").isEmail().withMessage("email is required"),
    body("phone").isMobilePhone().withMessage("phone is required"),
    body("address").exists().notEmpty().withMessage("address is required"),
  ];
};
