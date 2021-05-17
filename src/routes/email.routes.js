const { Router } = require("express");
const {
  Validation,
  AuthMiddleware,
  sendEmailValidationRules,
} = require("../middlewares");
const multer = require("multer");

const upload = multer();

module.exports = function ({ QuotationController }) {
  const router = Router();

  router.post(
    "",
    [AuthMiddleware, upload.single("pdfData")],
    QuotationController.sendEmail
  );

  return router;
};
