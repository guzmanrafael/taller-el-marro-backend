const { body } = require("express-validator");

module.exports = workShopValidationRules = () => {
  return [
    body("name").exists().notEmpty().withMessage("name is required"),
    body("address").exists().notEmpty().withMessage("address is required"),
    body("phone").isMobilePhone().withMessage("phone is required"),
    body("email").isEmail().withMessage("email is required"),
    body("sender").exists().notEmpty().withMessage("sender is required"),
    body("presentationMessage")
      .exists()
      .notEmpty()
      .withMessage("presentationMessage is required"),
    body("finalMessage")
      .exists()
      .notEmpty()
      .withMessage("finalMessage is required"),
  ];
};
