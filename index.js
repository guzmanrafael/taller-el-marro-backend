const container = require("./src/startup/container");
const server = container.resolve("app");
const db = container.resolve("db");

// Start the server
const start = async () => {
  try {
    await server.start();
    await db.sequelize.sync();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
