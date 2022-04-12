"use strict";

var config = require("../config/database");

var _require = require("../models/Product"),
    Producte = _require.Producte;

var jwt = require("jsonwebtoken");

var bcrypt = require("bcryptjs"); // const create = (req, res) => {
//   const Product = {
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     // image: req.body.image,
//   };
//   // Save Tutorial in the database
//     const products=await producte.create({
//       name: Product.name,
//       description: Product.description,
//       price: Product.price,
//     }).then((products) => {
//       res.send(products);
// })
// .catch ((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Product.",
//       });
//     });
// };


module.exports.create = function _callee(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);
          data = req.body; // const Product = {
          //   name: req.body.name,
          //   description: req.body.description,
          //   price: req.body.price,
          //   // image: req.body.image,
          // };

          _context.next = 4;
          return regeneratorRuntime.awrap(Producte.create({
            name: data.name,
            description: data.description,
            price: data.price
          }));

        case 4:
          product = _context.sent;
          res.json(product); // .then((product) => {
          //   res.send(product);
          // })
          // .catch((err) => {
          //   res.status(500).send({ message: err.message });
          // });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}; // module.exports = {
//   create,
// }