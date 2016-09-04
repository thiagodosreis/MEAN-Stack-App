/**
 * Created by thiagodosreis on 9/4/16.
 */

angular.module('controllersModule', ['servicesModule'])
    .controller('carriersController', function ($scope, dataManagement) {
        var carriersList = dataManagement.getCarriers();

        carriersList.success(function (data) {
            $scope.carriers = data.data;
            var num = data.data.length;
            $scope.num = num;
        });

        carriersList.error(function (data, status) {
            $scope.errorMessage = status;
        });


    }).controller('routesController', function ($scope, dataManagement, $routeParams) {

        var getDataPromise = dataManagement.getCarriersDetails($routeParams.flightId);
        $scope.carrier =  $routeParams.flightId;

        getDataPromise.success(function (data) {
            $scope.flightDtls = data.data;
            var num = data.data.length;
            $scope.num = num;
        });

        getDataPromise.error(function (data, status) {
            $scope.errorMessage = status;
        });


    }).controller('filesController', function ($scope, dataManagement, $routeParams) {

        var flightOp = dataManagement.getJSONFilesRoutes($routeParams.flightId, $routeParams.fileName);
        // var fileName = dataManagement.getJSONFilesRoutes($routeParams.flightName);
        $scope.carrier = $routeParams.flightId;
        $scope.filename = $routeParams.fileName;

        flightOp.success(function (data) {
            $scope.content = JSON.stringify(data.data);
        });

    })


