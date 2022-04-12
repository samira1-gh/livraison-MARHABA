const config = require("../config/database");
const jwt = require("jsonwebtoken");
const { CommandProduct } = require("../models/index");
const { Command } = require("../models/index");
const bcrypt = require("bcryptjs");

module.exports.create = async (req, res) => {
  try {
    const commandes = await Command.create({
      clientId: req.body.clientId,
      address: req.body.address,
      status: req.body.status,
      total: req.body.total,
    });
    req.body.commandeproduct.forEach(async (Commande) => {
      await CommandProduct.create({
        price: Commande.price,
        quantities: Commande.quantities,
        total: Commande.total,
        productId: Commande.productId,
        commandeId: commandes.id,
      });
    });
    res.json(commandes);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const Command = await Command.findAll();

    res.send(Commandes);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports.update = async (req, res) => {
  const Command = await Command.update({
    address: req.body.address,
    status: req.body.status,
    total: req.body.total,
  })
    .then((Comm) => {
      if (Comm == 1) {
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
        message: err.message || "some err ",
      });
    });
};

// delete commande
module.exports.Delete = async (req, res) => {
  const Commandes = await Commandes.destroy({
    where: { id: req.params.id },
  }).then((comm) => {
    if (comm == 1) {
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
