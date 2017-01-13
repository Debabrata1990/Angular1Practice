/**
 * Created by Debabrata Hazra on 07-01-2017.
 */

(function () {
    "use strict";

    angular.module("productManagement")
        .controller("ProductEditCtrl", ["$scope", "product", "$state", ProductEditCtrl]);

    function ProductEditCtrl($scope, product, $state) {
        $scope.product = product;
        $scope.product.releaseDate = new Date($scope.product.releaseDate);

        if ($scope.product && $scope.product.productId) {
            $scope.title = "Edit: " + $scope.product.productName;
        }
        else {
            $scope.title = "New Product";
        }

        //Product Edit Info
        $scope.datePicker = {opened : false};
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.datePicker.opened = true;
        }

        $scope.submit = function (isValid) {
            if(isValid) {
                $scope.product.$save(function (data) {
                    toastr.success("Save Successfull");
                });
            }
            else{
                alert("Please correct the validation errors first.");
            }
        }

        $scope.cancel = function () {
            $state.go('productList');
        }

        //Product Edit Tags
        $scope.xyz = {newTags :""};
        $scope.addTags = function (tags) {
            if (tags) {
                var array = tags.split(',');
                $scope.product.tags = $scope.product.tags ? $scope.product.tags.concat(array) : array;
                $scope.xyz.newTags = "";
            }
            else {
                alert("Please enter one or more tags separated by commas");
            }
        }
        $scope.removeTag = function (idx) {
            $scope.product.tags.splice(idx, 1);
        }
    }
})();
