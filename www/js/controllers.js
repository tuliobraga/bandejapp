angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('PratoDoDiaCtrl', function($scope) {

  $scope.pratoPrincipal = [
    { title: 'Arroz', id: 1 },
    { title: 'Feijão', id: 2 },
    { title: 'Salada de Alface', id: 3 },
    { title: 'Cubos Suínos', id: 4 }
  ];

  $scope.pratoVegetariano = [
    { title: 'Arroz', id: 1 },
    { title: 'Feijão', id: 2 },
    { title: 'Salada de Alface', id: 3 },
    { title: 'Almôndegas de Soja', id: 4 }
  ];

  $scope.sobremesa = [
    { title: 'Maçã', id: 1 },
    { title: 'Banana', id: 2 },
    { title: 'Paçoquinha', id: 3 }
  ];

  $scope.verPratoPrincipal = function() {

  }

  $scope.verPratoVegetariano = function() {
    
  }

})

.controller('EleicaoDePratosCtrl', function($scope) {

})

.controller('RankingDePratosCtrl', function($scope) {

})

.controller('AlertasCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope, $state) {
  
  $scope.loginData = {};

  $scope.doLogin = function() {
    $state.go('app.pratoDoDia');
  };

  $scope.signUp = function() {
    $state.go('signUp');
  };

  $scope.retrievePassword = function() {
    $state.go('retrievePassword');
  };
  
})

.controller('RetrievePasswordCtrl', function($scope, $state) {
  
  $scope.retrieveData = {};

  $scope.back = function() {
    $state.go('login');
  };

  $scope.retrievePassword = function() {
    
  };
  
})

.controller('SignUpCtrl', function($scope, $state) {
  
  $scope.singUpData = {};

  $scope.signUp = function() {
    
  };

  $scope.back = function() {
    $state.go('login');
  };
  
});
