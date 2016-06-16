// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('blog', {
        url: "/blog",
        templateUrl: "views/template.html",
        controller: 'BlogCtrl'
    })

    .state('user', {
        url: "/user",
        templateUrl: "views/template.html",
        controller: 'UserCtrl'
    });

    $urlRouterProvider.otherwise("/");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading img-responsive' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});
