/**
 * Created by Debabrata Hazra on 07-01-2017.
 */

(function () {
    "use strict";

    angular.module("productManagement")
        .controller("ProductDetailCtrl",
            ["product","$scope",ProductDetailCtrl]);

    function ProductDetailCtrl(product, $scope){

        $scope.product = product;

        $scope.title = "Product Detail: "+ $scope.product.productName;

        if($scope.product.tags){
            $scope.product.tagList = $scope.product.tags.toString();
        }
    }
})();
