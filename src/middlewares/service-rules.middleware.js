const { body } = require("express-validator");

module.exports = serviceValidationRules = () => {
  return [
    body("name").exists().notEmpty().withMessage("name is required"),
    body("price").isNumeric().withMessage("price is required"),
    body("time").exists().notEmpty().withMessage("time is required"),
  ];
};
