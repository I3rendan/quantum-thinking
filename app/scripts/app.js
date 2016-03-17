'use strict';

angular
  .module('quantumThinkingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })

      .when('/what-we-do', {
        templateUrl: 'views/what-we-do.html',
        controller: 'WhatCtrl'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })

      .otherwise({
        redirectTo: '/home'
      });
  });
