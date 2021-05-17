module.exports = {
  NotFoundMiddleware: require("./not-found.middleware"),
  ErrorMiddleware: require("./error.middleware"),
  AuthMiddleware: require("./auth.middleware"),
  ParseIntMiddleware: require("./parse-int.middleware"),
  UserRules: require("./user-rules.middleware"),
  UserUpdateRules: require("./userUpdate-rules.middleware"),
  ClientRules: require("./client-rules.middleware"),
  ServiceRules: require("./service-rules.middleware"),
  WorkShopRules: require("./workShop-rules.middleware"),
  Validation: require("./validation.middleware"),
  quotationValidationRules: require("./quotation-rules.middleware"),
  sendEmailValidationRules: require("./sendemail-rules.middleware"),
};
