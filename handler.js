/**
 * Created by thiagodosreis on 9/4/16.
 */

var publicCarrierFolder = './public/carriers/';

var errorResp = {
    error: {
        message: "Error on server!",
        code: 909
    },
    data: null
};

var successResp = {
    error: null,
    data: {}
};


function getCarriers(req, res){
    fs.readdir(publicCarrierFolder, function(err,data){
        if (err) {
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResp.error = err;
            res.end(JSON.stringify(errorResp) + "\n");
            return;

        } else {
            res.writeHead(200, {"Content-Type": "application/json"});
            successResp.data = data;
            res.end(JSON.stringify(successResp) + "\n");
            return;
        }
    })
};

function getRoutes(req, res){
    var flightOp = req.param('FlightOperator');
    fs.readdir(publicCarrierFolder+flightOp+'/', function(err,files){
        if (err) {
            res.writeHead(503, {"Content-Type": "application/json"});
            errorResp.error = err;
            res.end(JSON.stringify(errorResp) + "\n");
            return;

        } else {
            res.writeHead(200, {"Content-Type": "application/json"});
            successResp.data = files;
            res.end(JSON.stringify(successResp) + "\n");
            return;
        }
    })
}

function getJSONRoutes(req, res){
    var flightOp = req.param('FlightOperator');
    var fileName = req.param('RouteFile');

    fs.readFile(publicCarrierFolder + flightOp + "/" + fileName, function(err, content){
        if(err){
            //res.writeHead(503, {"Content-Type": "application/json"});
            res.end(JSON.stringify("File found!" + err.message)+"\n");
            return;
        }else{
            res.writeHead(200, {"Content-Type": "application/json"});
            successResp.data = content;
            res.end(JSON.stringify(successResp) + "\n");
            return;
        }
    });
}


module.exports.getCarriers = getCarriers;
module.exports.getRoutes = getRoutes;
module.exports.getJSONRoutes = getJSONRoutes;