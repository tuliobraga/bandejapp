var showError = function(text, $ionicPopup) {
  var alertPopup = $ionicPopup.alert({
      title: 'Falha',
      template: text
    });
  return alertPopup;
}

var enter = function (text, $state, $ionicPopup) {
  var alertPopup = $ionicPopup.alert({
    title: 'Sucesso',
    template: text
  });
  alertPopup.then(function(res) {
    $state.go('app.pratoDoDia');
  });
  return alertPopup;
};

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
    // verifying if email or password is empty
    if (!$scope.loginData.username || !$scope.loginData.password){
      showError('Email e senha são obrigatórios para efetuar login.', $ionicPopup);
    } else {
      // Start login
      $ionicLoading.show({
        template: 'Efetuando login...'
      });

      // simulate user wait
      $timeout(function() {
        $ionicLoading.hide();

        // simulate server-side login
        try {
          if(login()) {
            var text = "Login efetuado com sucesso!";
            enter(text, $state, $ionicPopup);
          }
        } catch(e) {
          showError(e, $ionicPopup);
        }
      }, 2000);
    }
  };

  var login = function() {
    if($scope.loginData.username == "aluno@cefetmg.br") {
      if($scope.loginData.password == "123")
        return true;
      else
        throw "Senha não corresponde ao email digitado!"
    }

    throw "Nenhum usuário encontrado para este email!"
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

.controller('SignUpCtrl', function($scope, $state, $timeout, $ionicPopup, $ionicLoading) {
  
  $scope.signUpData = {};

  $scope.doSignUp = function() {
        console.log($scope.signUpData.firstName);
    console.log($scope.signUpData.lastName);
    console.log($scope.signUpData.email);
    console.log($scope.signUpData.password);
    console.log($scope.signUpData.confirmPassword);
    console.log($scope.signUpData.gender);
    console.log($scope.signUpData.termsAccepted);
    if(!$scope.signUpData.firstName || !$scope.signUpData.lastName || 
       !$scope.signUpData.gender || !$scope.signUpData.email ||
       !$scope.signUpData.password || !$scope.signUpData.confirmPassword) {
      showError('Todos os campos são obrigatórios para efetuar cadastro.', $ionicPopup);
    } else if ($scope.signUpData.termsAccepted != true){
      showError('É necessário aceitar os termos de uso para proceder com o cadastro.', $ionicPopup);
    } else if ($scope.signUpData.password != $scope.signUpData.confirmPassword){
      showError('Senha e confirmação de senha precisam ser iguais.', $ionicPopup);
    } else {
      // Start sign up
      $ionicLoading.show({
        template: 'Efetuando cadastro...'
      });

      // simulate user wait
      $timeout(function() {
        $ionicLoading.hide();

        // simulate server-side login
        try {
          if(signUp())
            var msg = "Cadastro efetuado com sucesso! Um e-mail de confirmação foi enviado para você, favor verificar sua caixa de entrada. Caso não o encontre, certifique-se de que o mesmo não tenha sido filtrado para a caixa de spams.";
            enter(msg, $state, $ionicPopup);
        } catch(e) {
          showError(e, $ionicPopup);
        }
      }, 2000);
    }
  };

  var signUp = function() {
    return true;
  }

  $scope.termsOfUsage = function() {
    $state.go('termosDeUso');
  };

  $scope.back = function() {
    $state.go('login');
  };
  
})

.controller('TermosDeUsoCtrl', function($scope, $state) {

  $scope.back = function() {
    $state.go('signUp');
  };
  
});

