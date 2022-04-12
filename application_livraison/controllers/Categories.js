const config = require("../config/database");
const category = require("../models/catecory");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const create = (req, res) => {
  const Category = {
    name: req.body.name,
  };
  // Save Tutorial in the database
  category
    .create(Category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the category.",
      });
    });
};

// update category

const update = async (req, res) => {
  const name = req.params.name;
  const id = req.body.id;
  category
    .update(req.body, {
      where: { id: id },
    })
    .then((Category) => {
      if (Category == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${name}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + name,
      });
    });
};
// delete categories

const Delete = async (req, res) => {
  const name = req.params.name;
  const id = req.body.id;

  category
    .destroy(req.body, {
      where: { id: id },
    })
    .then((Category) => {
      if (Category == 1) {
        res.send({
          message: "category was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete cateogry with id=${id}. Maybe category was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};

module.exports = {
  create ,
  update,
  Delete,
};
