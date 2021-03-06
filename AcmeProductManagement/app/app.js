

(function () {
    "use strict";
    var app = angular
        .module("productManagement",
            ["common.services", "ui.router","ui.mask","ui.bootstrap", "productResourceMock", "ngMessages"]);

    app.config(
        ["$stateProvider","$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                //home
                .state("home",{
                    url:"/",
                    templateUrl:"app/welcomeView.html"
                })
                //products
                .state("productList",{
                    url:"/products",
                    templateUrl:"app/products/productListView.html",
                    controller:"ProductListCtrl"
                })
                //product edit
                .state("productEdit",{
                    abstract:true,
                    url:"/products/edit/:productId",
                    templateUrl:"app/products/productEditView.html",
                    controller:"ProductEditCtrl",
                    resolve:{
                        productResource:"productResource",
                        product:function (productResource,$stateParams) {
                            var productId=$stateParams.productId;
                            return productResource.get({productId:productId}).$promise;
                        }
                    }
                })
                .state("productEdit.info",{
                    url:"/info",
                    templateUrl:"app/products/productEditInfoView.html"
                })
                .state("productEdit.price",{
                    url:"/price",
                    templateUrl:"app/products/productEditPriceView.html"
                })
                .state("productEdit.tags",{
                    url:"/tags",
                    templateUrl:"app/products/productEditTagsView.html"
                })

                //product detail
                .state("productDetail",{
                    url:"/products/:productId",
                    templateUrl:"app/products/productDetailView.html",
                    controller:"ProductDetailCtrl",
                    resolve:{
                        productResource:"productResource",
                        product:function (productResource,$stateParams) {
                            var productId=$stateParams.productId;
                            return productResource.get({productId:productId}).$promise;
                            }
                        }
                    })
        }]
    );
})();