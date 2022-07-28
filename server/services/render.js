const axios = require("axios");
exports.homeRoutes = (req, res) => {
  //make a request to /api/commands
  axios
    .get("http://localhost:3000/api/commands")
    .then(function (response) {
      console.log(response);
      res.render("index", { commands: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.add_command = (req, res) => {
  res.render("add_command");
};
exports.update_command = (req, res) => {
  axios.get("http://localhost:3000/api/commands", {
    params: { id: req.query.id },
  })
    .then(function(commanddata){
        res.render("update_command",{command:commanddata.data});
    })
    .catch(err=>{
        res.send(err);
    })
};
