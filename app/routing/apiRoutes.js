var friendData = require("../data/friends");

module.exports = function(app) {
    // API GET Requests
   
    app.get("/api/survey", function(req, res) {
      res.json(friendData);
    });
  
  
    // API POST Requests
    
    app.post("/api/survey", function(req, res) {

      var user = req.body;

      if (friendData.length < ) {
        friendData.push(req.body);
        res.json(true);
      }


      friendData.push(user);
    });
    
  

  };
  