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

  $scope.top5 = [
    {
      title: 'DIA 11/05/15',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Bife acebolado", note: ""},
        {title: "Almeirão com cenouras", note: ""},
      ],
      comments: [{},{}],
      likes: []
    },
    {
      title: 'DIA 11/05/15',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Bife acebolado", note: ""},
        {title: "Almeirão com cenouras", note: ""},
      ]
    },
    {
      title: 'DIA 11/05/15',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Bife acebolado", note: ""},
        {title: "Almeirão com cenouras", note: ""},
      ]
    },
    {
      title: 'DIA 11/05/15',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Bife acebolado", note: ""},
        {title: "Almeirão com cenouras", note: ""},
      ]
    },
    {
      title: 'DIA 11/05/15',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Bife acebolado", note: ""},
        {title: "Almeirão com cenouras", note: ""},
      ]
    }
  ];

})

.controller('AlertasCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope, $state, $timeout, $ionicPopup, $ionicLoading) {
  
  $scope.loginData = {};

  $scope.doLogin = function() {
    if($scope.loginData.username == "aluno@cefetmg.br" && $scope.loginData.password == "123") {
      $ionicLoading.show({
        template: 'Carregando...'
      });
      $timeout(function() {
          $ionicLoading.hide();
          var alertPopup = $ionicPopup.alert({
            title: 'Sucesso',
            template: 'Login efetuado com sucesso!'
          });
          alertPopup.then(function(res) {
            $state.go('app.pratoDoDia');
          });
        }, 3000);
    } else if ($scope.loginData.username == "aluno@cefetmg.br" && $scope.loginData.password && $scope.loginData.password  != "123") {
      var alertPopup = $ionicPopup.alert({
        title: 'Falha',
        template: 'Senha não corresponde ao email digitado!'
      });
    } else if ($scope.loginData.username && $scope.loginData.password) {
      var alertPopup = $ionicPopup.alert({
        title: 'Falha',
        template: 'Nenhum usuário encontrado para este email!'
      });
    } else {
      var alertPopup = $ionicPopup.alert({
        title: 'Falha',
        template: 'Email e senha são obrigatórios para efetuar login.'
      });
    }
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
