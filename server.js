const express = require("express");
const app = express();
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("learn", "postgres", "13112003", {
  host: "localhost",
  dialect: "postgres",
});

const odam = sequelize.define("odam", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: "blue",
  },
});

(async () => {
  await sequelize.sync();
  // Code here
})();
odam
  .create({
    name: "Valisher",
    favoriteColor: "qizil",
  })
  .then(() => {
    console.log("created");
  })
  .catch((err) => {
    console.log(err.message);
  });
async function ishla() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
ishla();

app.listen(3000, () => {
  console.log("3000 port listening ");
});
