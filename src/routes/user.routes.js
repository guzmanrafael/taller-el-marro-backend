const { Router } = require("express");
const {
  UserUpdateRules,
  Validation,
  AuthMiddleware,
} = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:userId", [AuthMiddleware], UserController.get);
  router.patch(
    "/:userId",
    [AuthMiddleware, UserUpdateRules(), Validation],
    UserController.update
  );

  return router;
};
