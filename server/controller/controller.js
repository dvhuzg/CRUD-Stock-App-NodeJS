var Commanddb = require("../model/model");

// create and save new command
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // new command
  const command = new Commanddb({
    code: req.body.code,
    amount: req.body.amount,
    price: req.body.price,
    transaction: req.body.transaction
  });

  // save command in the database
  command
    .save(command)
    .then((data) => {
      //res.send(data)
      res.redirect("/add-command");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

// retrieve and return all commands/ retrive and return a single command
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Commanddb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found command with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving command with id " + id });
      });
  } else {
    Commanddb.find()
      .then((command) => {
        res.send(command);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            message:
              err.message || "Error Occurred while retriving command information",
          });
      });
  }
};

// Update a new idetified command by command id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Commanddb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Cannot Update user with ${id}. Maybe user not found!`,
          });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update user information" });
    });
};

// Delete a user with specified user id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Commanddb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "Command was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Command with id=" + id,
      });
    });
};
