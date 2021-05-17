const { Router } = require("express");
const {
  ClientRules,
  Validation,
  AuthMiddleware,
  ParseIntMiddleware,
} = require("../middlewares");

module.exports = function ({ ClientController }) {
  const router = Router();

  router.post(
    "",
    [AuthMiddleware, ClientRules(), Validation],
    ClientController.create
  );
  router.get("", [AuthMiddleware, ParseIntMiddleware], ClientController.getAll);
  router.get("/:clientId", [AuthMiddleware], ClientController.get);
  router.patch(
    "/:clientId",
    [AuthMiddleware, ClientRules(), Validation],
    ClientController.update
  );
  router.delete("/:clientId", [AuthMiddleware], ClientController.delete);

  return router;
};
