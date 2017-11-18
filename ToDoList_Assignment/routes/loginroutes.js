
/*
*Setting up login router
* As I am not able to create connection setup with Mongo, right now giving static data
* No new user registration functionality given here.
*/
exports.login = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  console.log(req.body);
  //Hence I have not created the mongo connection here, so directly writing the one record,
  //only use these credentials to login.
  //Later if some extra time we can connect to the mongo and we can create sign up functionaliity.
  results = [{
    email:"g@g.com",
    password:"g@1234"
  }];
  if (results.length > 0) {
    if (results[0].password == password) {
      res.send({
        "code": 200,
        "success": "login sucessfull"
      });
    }
    else {
      res.send({
        "code": 204,
        "success": "Email and password does not match"
      });
    }
  } else {
    res.send({
      "code": 504,
      "success": "Empty email and passowrd"
    })
  }
}