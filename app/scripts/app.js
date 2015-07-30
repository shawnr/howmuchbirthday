'use strict';

/**
 * @ngdoc overview
 * @name bdayApp
 * @description
 * # bdayApp
 *
 * Main module of the application.
 */
angular
  .module('bdayApp', [
    'angulartics',
    'angulartics.google.analytics',
    'djds4rce.angular-socialshare',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($FB){
    $FB.init('422911421228107');
  });
