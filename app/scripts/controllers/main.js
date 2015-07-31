'use strict';

/**
 * @ngdoc function
 * @name bdayApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bdayApp
 */
angular.module('bdayApp')
  .controller('MainCtrl', function ($scope, $analytics) {
    $scope.maxDate = new Date();
    $scope.oldYoung = "old";
    $scope.calculateBirthday = function(date, mode) {
        var millisPerYear = 1000 * 60 * 60 * 24 * 365;
        if (mode === 'day'){
            var dayToCheck = new Date(date).setHours(0,0,0,0);
            var today = new Date();
            var millisDelta = today - dayToCheck;

            if (millisDelta < millisPerYear) {
                $scope.yearsAlive = 0;
            } else {
                $scope.yearsAlive = Math.floor(millisDelta / millisPerYear);
            }

            if ($scope.yearsAlive < 40){
                $scope.oldYoung = "old";
            } else {
                $scope.oldYoung = "young";
            }

            if ($scope.yearsAlive < 13) {
                $scope.birthdayAmount = '1 day';
                $analytics.eventTrack('submittedBday', {  category: '1 Day', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 13) && ($scope.yearsAlive < 21)) {
                $scope.birthdayAmount = '1 weekend';
                $analytics.eventTrack('submittedBday', {  category: '1 Weekend', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 21) && ($scope.yearsAlive < 30)) {
                $scope.birthdayAmount = '3-day weekend';
                $analytics.eventTrack('submittedBday', {  category: '3-day weekend', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 30) && ($scope.yearsAlive < 40)) {
                $scope.birthdayAmount = '4-day weekend';
                $analytics.eventTrack('submittedBday', {  category: '4-day weekend', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 40) && ($scope.yearsAlive < 65)) {
                $scope.birthdayAmount = '1 week';
                $analytics.eventTrack('submittedBday', {  category: '1 Week', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 65) && ($scope.yearsAlive < 80)) {
                $scope.birthdayAmount = '2 weeks';
                $analytics.eventTrack('submittedBday', {  category: '2 Weeks', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 80) && ($scope.yearsAlive < 90)) {
                $scope.birthdayAmount = '3 weeks';
                $analytics.eventTrack('submittedBday', {  category: '3 Weeks', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 90) && ($scope.yearsAlive < 100)) {
                $scope.birthdayAmount = '1 month';
                $analytics.eventTrack('submittedBday', {  category: '1 Month', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 100) && ($scope.yearsAlive < 102)) {
                $scope.birthdayAmount = '6 weeks';
                $analytics.eventTrack('submittedBday', {  category: '6 Weeks', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 102) && ($scope.yearsAlive < 105)) {
                $scope.birthdayAmount = '2 months';
                $analytics.eventTrack('submittedBday', {  category: '2 Months', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 105) && ($scope.yearsAlive < 110)) {
                $scope.birthdayAmount = '3 months';
                $analytics.eventTrack('submittedBday', {  category: '3 Months', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 110) && ($scope.yearsAlive < 115)) {
                $scope.birthdayAmount = '4 months';
                $analytics.eventTrack('submittedBday', {  category: '4 Months', label: $scope.yearsAlive });
            } else if (($scope.yearsAlive >= 115) && ($scope.yearsAlive < 120)) {
                $scope.birthdayAmount = '6 months';
                $analytics.eventTrack('submittedBday', {  category: '6 Months', label: $scope.yearsAlive });
            } else if ($scope.yearsAlive >= 120) {
                // Oldest person ever:
                // Jeane Louise Calment (France), 122 years
                // http://www.guinnessworldrecords.com/world-records/oldest-person
                $scope.birthdayAmount = '12 months';
                $analytics.eventTrack('submittedBday', {  category: '12 Months', label: $scope.yearsAlive });
            }
        }
    }
  });
