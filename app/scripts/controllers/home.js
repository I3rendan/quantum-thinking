'use strict';

angular.module('quantumThinkingApp')
  .controller('HomeCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.darkTheme = true;
    $rootScope.homeTheme = true;

  });
