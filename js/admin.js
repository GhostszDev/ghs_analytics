angular.module('GHS_admin_mod', ['ngRoute', 'ui.bootstrap'])
    .controller('GHS_admin_ctrl', function($http, $scope, $httpParamSerializerJQLike, $location, $rootScope, $sce, $window) {

        $scope.getRecentComments = function () {

            $http({
                url: $scope.domain + "wp-json/ghs_api/v1/getuserdata",
                method: "POST",
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: $httpParamSerializerJQLike({
                    user_ID: user_id
                })
            })
                .then(function(response) {

                    if (response.data.success) {
                        $scope.user = response.data.user;
                    } else {
                        console.log(response.data.error_message);
                    }

                })
                .catch(function () {

                });

        }

    });