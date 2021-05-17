const { Router } = require("express");
const { UserRules, Validation, AuthMiddleware } = require("../middlewares");

module.exports = function ({ AuthController }) {
  const router = Router();

  router.post("/signup", [UserRules(), Validation], AuthController.signUp);
  router.post("/signin", [UserRules(), Validation], AuthController.signIn);

  return router;
};
