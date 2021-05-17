const { Router } = require("express");
const {
  ServiceRules,
  Validation,
  AuthMiddleware,
  ParseIntMiddleware,
} = require("../middlewares");

module.exports = function ({ ServiceController }) {
  const router = Router();

  router.post(
    "",
    [AuthMiddleware, ServiceRules(), Validation],
    ServiceController.create
  );
  router.get(
    "",
    [AuthMiddleware, ParseIntMiddleware],
    ServiceController.getAll
  );
  router.get("/:serviceId", [AuthMiddleware], ServiceController.get);
  router.patch(
    "/:serviceId",
    [AuthMiddleware, ServiceRules(), Validation],
    ServiceController.update
  );
  router.delete("/:serviceId", [AuthMiddleware], ServiceController.delete);

  return router;
};
