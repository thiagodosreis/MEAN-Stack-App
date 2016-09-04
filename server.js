/**
 * Created by thiagodosreis on 9/4/16.
 */

var express = require('express');
var handler = require('./handler');


var path = require("path"),
    async = require('async');
fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));

//main entrance
app.get('/', function(req, res){
    res.end("Hello this is Thiago's Final Project for MEAN Stack!");
});

//getting the list of carriers
app.get('/carriers/', function(req, res){
    handler.getCarriers(req,res);
});

//getting all the flight routes for a specific carrier
app.get('/carriers/:FlightOperator', function(req, res){
    handler.getRoutes(req, res);
});

//getting all the flight routes for a specific carrier
app.get('/carriers/:FlightOperator/:RouteFile', function(req, res){
    handler.getJSONRoutes(req, res);
});

app.listen(8000);





