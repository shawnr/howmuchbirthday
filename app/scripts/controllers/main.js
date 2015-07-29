'use strict';

/**
 * @ngdoc function
 * @name bdayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bdayApp
 */
angular.module('bdayApp')
  .controller('MainCtrl', function ($scope) {
    $scope.calculateBirthday = function(date, mode) {
        var millisPerYear = 1000 * 60 * 60 * 24 * 365;
        if (mode === 'day'){
            var dayToCheck = new Date(date).setHours(0,0,0,0);
            var today = new Date();
            var millisDelta = today - dayToCheck;
            $scope.yearsAlive = Math.floor(millisDelta / millisPerYear) + 1;

            if ($scope.yearsAlive < 13) {
                $scope.birthdayAmount = '1 day';
            } else if (($scope.yearsAlive >= 13) && ($scope.yearsAlive < 21)) {
                $scope.birthdayAmount = '1 weekend';
            } else if (($scope.yearsAlive >= 21) && ($scope.yearsAlive < 30)) {
                $scope.birthdayAmount = '3-day weekend';
            } else if (($scope.yearsAlive >= 30) && ($scope.yearsAlive < 40)) {
                $scope.birthdayAmount = '4-day weekend';
            } else if (($scope.yearsAlive >= 40) && ($scope.yearsAlive < 65)) {
                $scope.birthdayAmount = '1 week';
            } else if (($scope.yearsAlive >= 65) && ($scope.yearsAlive < 80)) {
                $scope.birthdayAmount = '2 weeks';
            } else if (($scope.yearsAlive >= 80) && ($scope.yearsAlive < 90)) {
                $scope.birthdayAmount = '3 weeks';
            } else if (($scope.yearsAlive >= 90) && ($scope.yearsAlive < 100)) {
                $scope.birthdayAmount = '1 month';
            } else if (($scope.yearsAlive >= 100) && ($scope.yearsAlive < 102)) {
                $scope.birthdayAmount = '6 weeks';
            } else if (($scope.yearsAlive >= 102) && ($scope.yearsAlive < 105)) {
                $scope.birthdayAmount = '2 months';
            } else if (($scope.yearsAlive >= 105) && ($scope.yearsAlive < 110)) {
                $scope.birthdayAmount = '3 months';
            } else if (($scope.yearsAlive >= 110) && ($scope.yearsAlive < 115)) {
                $scope.birthdayAmount = '4 months';
            } else if (($scope.yearsAlive >= 115) && ($scope.yearsAlive < 120)) {
                $scope.birthdayAmount = '6 months';
            } else if ($scope.yearsAlive >= 120) {
                // Oldest person ever:
                // Jeane Louise Calment (France), 122 years
                // http://www.guinnessworldrecords.com/world-records/oldest-person
                $scope.birthdayAmount = '12 months';
            }
        }
    }
  });
