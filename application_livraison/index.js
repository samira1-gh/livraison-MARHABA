require("dotenv").config();
const express = require("express");

const app = express();
// var corsOptions = {
//   origin: "http://localhost:8081"
// };
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const {
  CommandPro,
  category,
  User,
  Commande,
  Product,
} = require("./models/index");
const connexion = require("./config/database");

const userRoutes = require("./Router/auth");
const CategorieRoute = require("./Router/RouteCtagories");
const ProductRoute = require("./Router/RouteProduct");
const CommandeRoute = require("./Router/RouteCommande");
const FactureRoute = require("./Router/RouteFacture");

app.use("/api/user", userRoutes);
app.use("/Admin", CategorieRoute);
app.use("/Admin/pro", ProductRoute);
app.use("/Admin/Com", CommandeRoute);
app.use("/user/facture", FactureRoute);

connexion
  .authenticate()
  .then(() => console.log("Database connect"))
  .catch(() => console.log("Error : " + err));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
