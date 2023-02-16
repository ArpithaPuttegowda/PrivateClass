var express = require("express");

var router = express.Router();
var mongodb = require("mongodb");

router.post("/std-insert", function (req, res) {
  var data = req.body.data;
  var mongoClient = mongodb.MongoClient;
  var url = "mongodb://localhost:27017";

  mongoClient.connect(url, function (err, server) {
    if (err) {
      res.send("db connection error");
    } else {
      var db = server.db("school");
      var collection = db.collection("student");
      collection.insertOne(data, function (e, s) {
        if (e) {
          res.send(e);
        } else {
          res.send(s);
        }
      });
    }
  });
});

router.get("/get-std", function (req, res, next) {
  var url = "mongodb://localhost:27017";
  var mongoClient = mongodb.MongoClient;
  mongoClient.connect(url, function (err, server) {
    if (err) {
      res.send("db con error");
    } else {
      var db = server.db("school");
      var collection = db.collection("student");
      collection.find({}).toArray(function (e, r) {
        if (e) {
          res.send(e);
        } else {
          res.send(r);
        }
      });
    }
  });
});

module.exports = router;
