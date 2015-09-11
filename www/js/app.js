(function() {
  'use strict';

  angular.module('myAppReader', ['ionic'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      })


    .state('app', {
      url: '/app',
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })


    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html',
          controller: 'SearchCtrl'
        }
      }
    })


    .state('app.register', {
        url: '/register',
        views: {
          'menuContent': {
            templateUrl: 'templates/register.html',
            controller: 'RegisterCtrl'
          }
        }
      })


      .state('app.history', {
        url: '/history',
        views: {
          'menuContent': {
            templateUrl: 'templates/history.html',
            controller: 'HistoryCtrl'
          }
        }
      })


      .state('app.read', {
        url: '/read',
        views: {
          'menuContent': {
            templateUrl: 'templates/read.html',
            controller: 'ReadCtrl'
          }
        }
      })

    .state('app.user', {
      url: '/user/:userId',
      views: {
        'menuContent': {
          templateUrl: 'templates/user.html',
          controller: 'UserCtrl'
        }
      }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
})();
