/**
 * Created by thiagodosreis on 9/4/16.
 */

angular.module('servicesModule', [])
    .factory('dataManagement', function ($http) {
        return {
            getCarriers: function () {
                var carrierPromise = $http({method: 'GET', url: 'http://localhost:8000/carriers'});
                return carrierPromise;
            },
            getCarriersDetails: function (carrierName) {
                var detailspromise = $http({
                    method: 'GET',
                    url: 'http://localhost:8000/carriers/' + carrierName
                });
                return detailspromise;
            }
            ,
            getJSONFilesRoutes: function (carrierName, filename) {
                var filesJSON = $http({
                    method: 'GET',
                    url: 'http://localhost:8000/carriers/' + carrierName + "/"+ filename
                });
                return filesJSON;
            }
        }
    })
