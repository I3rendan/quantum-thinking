'use strict';

angular.module('quantumThinkingApp')
  .controller('ContactCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.darkTheme = false;

  });
