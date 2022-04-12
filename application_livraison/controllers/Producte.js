const config = require("../config/database");
const Producte = require("../models/Product");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports.create = async (req, res) => {
  const product = await Producte.create({
    name: req.body.name,
    decsription: req.body.decsription,
    price: req.body.price,
  });
  res.json(product);
};

exports.getAll = async (req, res) => {
  try {
    const produc = await Producte.findAll();

    res.send(produc);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.update = async (req, res) => {
  const product = await Producte.update(
    {
      name: req.body.name,
      decsription: req.body.decsription,
      price: req.body.price,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((pro) => {
      if (pro == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })

    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// delete product
module.exports.Delete = async (req, res) => {
  const produc = await Producte.destroy(
  
    {
      where: { id: req.params.id },
    }
  ).then((pro) => {
    if (pro == 1) {
      res.send({
        message: "Tutorial was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
      });
    }
  });
};


