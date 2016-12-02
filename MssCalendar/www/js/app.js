angular.module('starter', ['ionic', 'starter.controllers', 'ui.rCalendar','calDetail','app.calender','createEvent','ngCordova'])
.run(function($ionicPlatform,$rootScope) {

$rootScope.nameVal ='Please Enter the Name' ;
$rootScope.discriptionVal ='Please Enter the Discription';
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
   }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    window.CoolPlugin.showToast('textValue');
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.calender', {
    url: '/calender',
     cache : false,
    views: {
      'menuContent': {
        templateUrl: 'templates/calender.html',
        controller: 'CaladarCtrl'
      }
    }
  })
  .state('calDetail', {
      url: '/calDetail',
       cache : false,
          templateUrl: 'templates/calenderDetail.html',
          controller: 'CalDetailCtrl'
    })
 .state('createEvent', {
          url: '/createEvent',
           cache : false,
              templateUrl: 'templates/createEvent.html',
              controller: 'createEventCtrl'
        })
$urlRouterProvider.otherwise('/app/calender');
});
