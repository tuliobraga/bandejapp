// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.pratoDoDia', {
    url: '/prato-do-dia',
    views: {
      'menuContent': {
        templateUrl: 'templates/prato-do-dia.html',
        controller: 'PratoDoDiaCtrl'
      }
    }
  })

  .state('app.eleicaoDePratos', {
    url: '/eleicao-de-pratos',
    views: {
      'menuContent': {
        templateUrl: 'templates/eleicao-de-pratos.html',
        controller: 'EleicaoDePratosCtrl'
      }
    }
  })

  .state('app.rankingDePratos', {
    url: '/ranking-de-pratos',
    views: {
      'menuContent': {
        templateUrl: 'templates/ranking-de-pratos.html',
        controller: 'RankingDePratosCtrl'
      }
    }
  })

  .state('app.alertas', {
    url: '/alertas',
    views: {
      'menuContent': {
        templateUrl: 'templates/alertas.html',
        controller: 'AlertasCtrl'
      }
    }
  })

  .state('noMenu', {
    abstract: true,
    templateUrl: 'templates/no-menu.html'
  })

  .state('login', {
    url: "/entrar",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })

  .state('retrievePassword', {
    url: "/recuperar-senha",
    templateUrl: "templates/retrieve-password.html",
    controller: 'RetrievePasswordCtrl'
  })

  .state('signUp', {
    url: "/cadastrar",
    templateUrl: "templates/sign-up.html",
    controller: 'SignUpCtrl'
  })

  .state('termosDeUso', {
    url: '/termos-de-uso',
    templateUrl: 'templates/termos-de-uso.html',
    controller: 'TermosDeUsoCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/entrar');

});
