(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ["$scope","productResource", ProductListCtrl]);

    function ProductListCtrl($scope, productResource) {

        productResource.query(function(data){
            $scope.products = data;
        });

        $scope.showImage = false;

        $scope.toggleImage = function () {
            $scope.showImage = !$scope.showImage;
        }
    }
})();