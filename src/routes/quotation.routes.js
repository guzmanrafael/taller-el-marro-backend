const { Router } = require("express");
const {
  quotationValidationRules,
  Validation,
  AuthMiddleware,
  ParseIntMiddleware,
  sendEmailValidationRules,
} = require("../middlewares");

module.exports = function ({ QuotationController }) {
  const router = Router();

  router.post(
    "",
    [AuthMiddleware, quotationValidationRules(), Validation],
    QuotationController.create
  );

  router.get(
    "",
    [AuthMiddleware, ParseIntMiddleware],
    QuotationController.getAll
  );
  router.get("/:quotationId", [AuthMiddleware], QuotationController.get);
  router.patch(
    "/:quotationId",
    [AuthMiddleware, quotationValidationRules(), Validation],
    QuotationController.update
  );
  router.delete("/:quotationId", [AuthMiddleware], QuotationController.delete);

  return router;
};
