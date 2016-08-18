'use strict';

angular.module('quantumThinkingApp')
  .controller('WhatCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.darkTheme = false;
    $rootScope.homeTheme = false;

  });
