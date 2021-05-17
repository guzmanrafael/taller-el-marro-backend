const { body } = require("express-validator");

module.exports = quotationValidationRules = () => {
  return [
    body("serviceList")
      .exists()
      .notEmpty()
      .withMessage("serviceList is required"),
    body("clientId").isNumeric().withMessage("Id Client is required"),
    body("total").isNumeric().withMessage("Total is required"),
    body("date").exists().notEmpty().withMessage("date is required"),
    body("status").exists().notEmpty().withMessage("status is required"),
  ];
};
