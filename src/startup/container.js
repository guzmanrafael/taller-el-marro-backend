const { createContainer, asClass, asValue, asFunction } = require("awilix");

// config
const config = require("../config");
const app = require(".");

// routes
const {
  AuthRoutes,
  UserRoutes,
  ClientRoutes,
  ServiceRoutes,
  WorkShopRoutes,
  QuotationRoutes,
  EmailRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes");

// controllers
const {
  AuthController,
  UserController,
  ClientController,
  ServiceController,
  WorkShopController,
  QuotationController,
} = require("../controllers");

// services
const {
  AuthService,
  UserService,
  ClientService,
  ServiceService,
  WorkShopService,
  QuotationService,
} = require("../services");

// repositories
const {
  UserRepository,
  ClientRepository,
  ServiceRepository,
  WorkShopRepository,
  QuotationRepository,
} = require("../repositories");

// db
const db = require("../models");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    db: asValue(db),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    ClientRoutes: asFunction(ClientRoutes).singleton(),
    ServiceRoutes: asFunction(ServiceRoutes).singleton(),
    WorkShopRoutes: asFunction(WorkShopRoutes).singleton(),
    QuotationRoutes: asFunction(QuotationRoutes).singleton(),
    EmailRoutes: asFunction(EmailRoutes).singleton(),
  })
  .register({
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    ClientController: asClass(
      ClientController.bind(ClientController)
    ).singleton(),
    ServiceController: asClass(
      ServiceController.bind(ServiceController)
    ).singleton(),
    WorkShopController: asClass(
      WorkShopController.bind(WorkShopController)
    ).singleton(),
    QuotationController: asClass(
      QuotationController.bind(QuotationController)
    ).singleton(),
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    UserService: asClass(UserService).singleton(),
    ClientService: asClass(ClientService).singleton(),
    ServiceService: asClass(ServiceService).singleton(),
    WorkShopService: asClass(WorkShopService).singleton(),
    QuotationService: asClass(QuotationService).singleton(),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    ClientRepository: asClass(ClientRepository).singleton(),
    ServiceRepository: asClass(ServiceRepository).singleton(),
    WorkShopRepository: asClass(WorkShopRepository).singleton(),
    QuotationRepository: asClass(QuotationRepository).singleton(),
  });

module.exports = container;
