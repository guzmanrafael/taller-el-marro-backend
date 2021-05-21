const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const path = require("path");
const errorMiddleware = require("../middlewares/error.middleware");
require("express-async-errors");

module.exports = function ({
  UserRoutes,
  AuthRoutes,
  ClientRoutes,
  ServiceRoutes,
  WorkShopRoutes,
  QuotationRoutes,
  EmailRoutes,
}) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

  apiRoutes.options("*", cors());

  apiRoutes.use("/auth", AuthRoutes);
  apiRoutes.use("/user", UserRoutes);
  apiRoutes.use("/client", ClientRoutes);
  apiRoutes.use("/service", ServiceRoutes);
  apiRoutes.use("/workshop", WorkShopRoutes);
  apiRoutes.use("/quotation", QuotationRoutes);
  apiRoutes.use("/sendEmail", EmailRoutes);

  router.use("/v1/api", apiRoutes);

  router.use(errorMiddleware);

  /*
  router.use(express.static(path.join(__dirname, "../../build")));

  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../build", "index.html"));
  });
  */
  return router;
};
