"use strict";angular.module("bdayApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("bdayApp").controller("MainCtrl",["$scope",function(a){a.calculateBirthday=function(b,c){var d=31536e6;if("day"===c){var e=new Date(b).setHours(0,0,0,0),f=new Date,g=f-e;a.yearsAlive=Math.floor(g/d)+1,a.yearsAlive<13?a.birthdayAmount="1 day":a.yearsAlive>=13&&a.yearsAlive<21?a.birthdayAmount="1 weekend":a.yearsAlive>=21&&a.yearsAlive<30?a.birthdayAmount="3-day weekend":a.yearsAlive>=30&&a.yearsAlive<40?a.birthdayAmount="4-day weekend":a.yearsAlive>=40&&a.yearsAlive<65?a.birthdayAmount="1 week":a.yearsAlive>=65&&a.yearsAlive<80?a.birthdayAmount="2 weeks":a.yearsAlive>=80&&a.yearsAlive<90?a.birthdayAmount="3 weeks":a.yearsAlive>=90&&a.yearsAlive<100?a.birthdayAmount="1 month":a.yearsAlive>=100&&a.yearsAlive<102?a.birthdayAmount="6 weeks":a.yearsAlive>=102&&a.yearsAlive<105?a.birthdayAmount="2 months":a.yearsAlive>=105&&a.yearsAlive<110?a.birthdayAmount="3 months":a.yearsAlive>=110&&a.yearsAlive<115?a.birthdayAmount="4 months":a.yearsAlive>=115&&a.yearsAlive<120?a.birthdayAmount="6 months":a.yearsAlive>=120&&(a.birthdayAmount="12 months")}}}]),angular.module("bdayApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("bdayApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<section ng-init="dt=false"> <h1>How Much Birthday<br>Do You Deserve?</h1> <div style="display:inline-block; min-height:290px"> <datepicker ng-model="dt" datepicker-mode="year" show-weeks="false" custom-class="calculateBirthday(date, mode)" class="well well-sm"></datepicker> </div> <p ng-if="dt">Your birthday is: {{dt | date:\'fullDate\' }}. This year you will be {{yearsAlive}} years old.</p> </section> <section ng-if="dt"> <h2>You have earned</h2> <p class="lead">{{birthdayAmount}} of birthday.</p> </section>')}]);