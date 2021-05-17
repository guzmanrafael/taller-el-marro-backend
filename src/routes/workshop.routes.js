const { Router } = require("express");
const {
  WorkShopRules,
  Validation,
  AuthMiddleware,
  ParseIntMiddleware,
} = require("../middlewares");

module.exports = function ({ WorkShopController }) {
  const router = Router();

  router.post(
    "",
    [AuthMiddleware, WorkShopRules(), Validation],
    WorkShopController.create
  );
  router.get("", [AuthMiddleware], WorkShopController.getAll);
  router.get("/:workShopId", [AuthMiddleware], WorkShopController.get);
  router.patch(
    "/:workShopId",
    [AuthMiddleware, WorkShopRules(), Validation],
    WorkShopController.update
  );
  router.delete("/:workShopId", [AuthMiddleware], WorkShopController.delete);

  return router;
};
