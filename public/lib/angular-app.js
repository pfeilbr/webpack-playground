// small and simple angular app.  just enough to see that it works
var angular = require('angular');

require('../stylesheets/main.css');

// https://github.com/teux/ng-cache-loader
require('ng-cache!./../partials/view01.html');

// create DOM UI from template
var root = angular.element('<div ng-app="app" ng-view></div>');

angular.element(document.body).append(root);

angular.module('app', [require('angular-route')])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/view01', {
                    templateUrl: 'view01.html', // loaded in via ng-cache.  see above require
                    controller: 'MyCtrl'
                }).
                when('/view02', {
                    templateUrl: 'public/partials/view02.html',
                    controller: 'MyCtrl2'
                }).
                otherwise({
                    redirectTo: '/view01'
                });
        }])

    .controller('MyCtrl', ['$scope', function ($scope) {
        $scope.msg = 'Hello from ng';
    }])

    .controller('MyCtrl2', ['$scope', function ($scope) {
        $scope.msg = 'Hello from view02';
    }]);


angular.bootstrap(root, ['app']);