const { body } = require("express-validator");

module.exports = sendEmailValidationRules = () => {
  return [
    body("pdfData").exists().notEmpty().withMessage("pdfData is required"),
    body("client").exists().notEmpty().withMessage("Client is required"),
  ];
};
