var focusEnabled = false;

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

.directive('focusMe', function($timeout) {
  return {
    link: function(scope, element, attrs) {
      if(focusEnabled)
        $timeout(function() {
          element[0].focus(); 
        });
    }
  };
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('PratoDoDiaCtrl', function($scope, $state) {

  $scope.mainDish = {
    id: 1,
    main: true,
    type: 'Principal',
    image: 'prato-feito.png',
    components: [
      { title: 'Arroz', id: 1 },
      { title: 'Feijão', id: 2 },
      { title: 'Salada de Alface', id: 3 },
      { title: 'Canelone de presunto', extra: 'Lactose, Glúten', id: 4 }
    ],
    comments: [
      {
        user: 'Matheus Nogueira',
        text: 'Excelente! Só faltou uma banana.'
      },
      {
        user: 'Talita Santana',
        text: 'Fofinho! Prato muito colorido.'
      },
      {
        user: 'Thales Brant',
        text: 'Gostei não zé.'
      },
      {
        user: 'Guilherme Andrade',
        text: 'Tão bom que comi três vezes.'
      },
    ],
    likes: [{},{},{},{},{},{},{},{},{},{}],
    liked: false
  };

  $scope.vegetarianDish = {
    id: 2,
    main: false,
    type: 'Vegetariano',
    image: 'prato-vegetariano.png',
    components: [
      { title: 'Arroz', id: 1 },
      { title: 'Feijão', id: 2 },
      { title: 'Salada de Alface', id: 3 },
      { title: 'Almôndegas de Soja', id: 4 }
    ],
    comments: [],
    likes: [{},{}],
    liked: false
  };

  $scope.desert = [
    { title: 'Maçã', id: 1 },
    { title: 'Banana', id: 2 },
    { title: 'Paçoquinha', id: 3 }
  ];

  $scope.openComments = function(id) {
    $state.go('app.comentarios', {id: id, write: false});
  }

  $scope.openCommentsToWrite = function(id) {
    $state.go('app.comentarios', {id: id, write: true});
  }

  $scope.like = function(main) {
    if(main) {
      $scope.mainDish.liked ? $scope.mainDish.likes.pop({}) : $scope.mainDish.likes.push({});
      $scope.mainDish.liked = !$scope.mainDish.liked;
    } else {
      $scope.vegetarianDish.liked ? $scope.vegetarianDish.likes.pop({}) : $scope.vegetarianDish.likes.push({});
      $scope.vegetarianDish.liked = !$scope.vegetarianDish.liked;
    }
  }

})

.controller('EleicaoDePratosCtrl', function($scope, $timeout, $ionicLoading, $ionicPopup) {
  $scope.days = [
    {
      title: 'Segunda-feira',
      dishes: [
        {
          main: true,
          image: 'prato-feito.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Canelone de presunto", note: "Lactose, Glúten"},
            {title: "Almeirão com cenouras", note: ""},
          ],
          percentage: 65,
          voted: false
        },
        {
          image: 'prato-vegetariano.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Hamburguer soja", note: ""},
            {title: "Alface com beterrabas", note: ""},
          ],
          percentage: 35,
          voted: false
        }
      ]
    },
    {
      title: 'Terça-feira',
      dishes: [
        {
          main: true,
          image: 'prato-vegetariano.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Canelone de presunto", note: "Lactose, Glúten"},
            {title: "Almeirão com cenouras", note: ""},
          ],
          percentage: 65,
          voted: false
        },
        {
          image: 'prato-feito.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Hamburguer soja", note: ""},
            {title: "Alface com beterrabas", note: ""},
          ],
          percentage: 35,
          voted: false
        }
      ]
    },
    {
      title: 'Quarta-feira',
      dishes: [
        {
          main: true,
          image: 'prato-feito.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Canelone de presunto", note: "Lactose, Glúten"},
            {title: "Almeirão com cenouras", note: ""},
          ],
          percentage: 65,
          voted: false
        },
        {
          image: 'prato-vegetariano.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Hamburguer soja", note: ""},
            {title: "Alface com beterrabas", note: ""},
          ],
          percentage: 35,
          voted: false
        }
      ]
    },
    {
      title: 'Quinta-feira',
      dishes: [
        {
          main: true,
          image: 'prato-vegetariano.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Canelone de presunto", note: "Lactose, Glúten"},
            {title: "Almeirão com cenouras", note: ""},
          ],
          percentage: 65,
          voted: false
        },
        {
          image: 'prato-feito.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Hamburguer soja", note: ""},
            {title: "Alface com beterrabas", note: ""},
          ],
          percentage: 35,
          voted: false
        }
      ]
    },
    {
      title: 'Sexta-feira',
      dishes: [
        {
          main: true,
          image: 'prato-feito.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Canelone de presunto", note: "Lactose, Glúten"},
            {title: "Almeirão com cenouras", note: ""},
          ],
          percentage: 65,
          voted: false
        },
        {
          image: 'prato-vegetariano.png',
          components: [
            {title: "Arroz", note: ""},
            {title: "Feijão", note: ""},
            {title: "Hamburguer soja", note: ""},
            {title: "Alface com beterrabas", note: ""},
          ],
          percentage: 35,
          voted: false
        }
      ]
    }
  ];

  $scope.doVote = function(day_index, dish_index) {
    var dishes = $scope.days[day_index].dishes;
    if(dishes[dish_index].voted == true) {
      cancelVote(dishes, dish_index);
    } else {
      vote(dishes, dish_index)
    }
  }

  var vote = function(dishes, dish_index) {
    dishes[dish_index].voted = true;
    if(dishes[dish_index].percentage <= 99) {
      dishes[dish_index].percentage++;
    }

    var other_index = (dish_index+1)%2; // 0 or 1
    dishes[other_index].voted = false;
    if(dishes[other_index].percentage >= 1) {
      dishes[other_index].percentage--;
    }
  }

  var cancelVote = function(dishes, dish_index) {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Cancelar voto',
      template: 'Você tem certeza que deseja remover o voto que você deu?',
      cancelText: 'Manter voto',
      okText: 'Remover'
    });

    confirmPopup.then(function(res) {
      if(res) {
        $ionicLoading.show({
          template: 'Removendo voto...'
        });
        $timeout(function() {
          $ionicLoading.hide();
          
        }, 10000);
      }
    });
  }

})

.controller('RankingDePratosCtrl', function($scope) {

  $scope.top5 = [
    {
      date: '11/10/15',
      main: true,
      image: 'prato-feito.png',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Bife acebolado", note: ""},
        {title: "Almeirão com cenouras", note: ""},
      ],
      likes: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      comments: [{},{}]
    },
    {
      date: '01/11/15',
      main: false,
      image: 'prato-vegetariano.png',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Hamburguer soja", note: ""},
        {title: "Alface com beterrabas", note: ""},
      ],
      likes: [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
      comments: [{}]
    },
    {
      date: '07/11/15',
      main: true,
      image: 'prato-feito.png',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Almônegas de carne", note: ""},
        {title: "Couve com quiabo", note: ""},
      ],
      likes: [{},{},{},{},{},{},{},{},{},{},{},{},{}],
      comments: []
    },
    {
      date: '20/10/15',
      main: false,
      image: 'prato-vegetariano.png',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Tofu", note: ""},
        {title: "Batata cozida", note: ""},
      ],
      likes: [{},{},{},{},{},{},{},{},{},{},{}],
      comments: []
    },
    {
      date: '29/10/15',
      main: true,
      image: 'prato-feito.png',
      components: [
        {title: "Arroz", note: ""},
        {title: "Feijão", note: ""},
        {title: "Frango grelhado", note: ""},
        {title: "Almeirão com cenouras", note: ""},
      ],
      likes: [{},{},{},{},{},{},{},{},{},{}],
      comments: []
    }
  ];

})

.controller('AlertasCtrl', function($scope, $state) {

  $scope.alerts = [
    {
      id: "1",
      title: "Atenção!",
      text: "Os servidores do bandejão decidiram em reunião que amanhã (19/10/2015) haverá paralização, portanto não haverá atendimento.",
      icon: "ion-close-circled assertive",
    },
    {
      id: "2",
      title: "Pense!",
      text: "Não deixe as torneiras abertas enquanto escova os dentes após as refeições. Economize água, nosso planeta agradece.",
      icon: "ion-information-circled calm"
    },
    {
      id: "3",
      title: "Participe!",
      text: "Participe das eleições de pratos do bandeijão do CEFET-MG. Ajude-nos a decidir o prato ideal para nossas refeições.",
      icon: "ion-information-circled calm"
    },
    {
      id: "4",
      title: "Atenção!",
      text: "O bandejão do CEFET-MG campus II não funcionará hoje (01/10/2015) devido a falta de funcionários.",
      icon: "ion-close-circled assertive"
    },
  ];

  $scope.openAlert = function(index) {
    var alert = $scope.alerts[index];
    $state.go('app.alerta', {id: alert.id, title: alert.title, text: alert.text, icon: alert.icon});
  };

})

.controller('AlertaCtrl', function($scope, $stateParams) {

  $scope.alert = {
    id: $stateParams.id,
    title: $stateParams.title,
    text: $stateParams.text,
    icon: $stateParams.icon
  };

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

.controller('RetrievePasswordCtrl', function($scope, $state, $timeout, $ionicPopup, $ionicLoading) {
  
  $scope.retrieveData = {};

  $scope.back = function() {
    $state.go('login');
  };

  $scope.doRetrievePassword = function() {
    // verifying if email is empty
    if (!$scope.retrieveData.email){
      showError('Email é obrigatório para recuperação.', $ionicPopup);
    } else {
      // Start login
      $ionicLoading.show({
        template: 'Recuperando senha...'
      });

      // simulate user wait
      $timeout(function() {
        $ionicLoading.hide();

        // simulate server-side login
        try {
          if(retrievePassword()) {
            var text = "Um link de recuperação foi enviado para este e-mail. Acesse-o para recuperar sua senha. Caso não o encontre, certifique-se de que o mesmo não tenha sido filtrado para a caixa de spams.";
            var alertPopup = $ionicPopup.alert({
              title: 'Sucesso',
              template: text
            });
            alertPopup.then(function(res) {
              $state.go('login');
            });
            return alertPopup;
          }
        } catch(e) {
          showError(e, $ionicPopup);
        }
      }, 2000);
    }
  };

  var retrievePassword = function() {
    return true;
  }
  
})

.controller('SignUpCtrl', function($scope, $state, $timeout, $ionicPopup, $ionicLoading) {
  
  $scope.signUpData = {};

  $scope.doSignUp = function() {
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
            var msg = "Cadastro efetuado com sucesso! Um e-mail de confirmação foi enviado para você, favor verificar sua caixa de entrada. Caso não encontre, certifique-se de que o mesmo não tenha sido filtrado para a caixa de spams.";
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
  
})

.controller('ComentariosCtrl', function($scope, $stateParams, $timeout, $ionicLoading, $ionicPopup) {
  focusEnabled = $stateParams.write;
  $scope.commentData;

  $scope.comments = [
    {
      user: 'Matheus Nogueira',
      text: 'Excelente! Só faltou uma banana.',
      user_id: 1
    },
    {
      user: 'Talita Santana',
      text: 'Fofinho! Prato muito colorido.',
      user_id: 2
    },
    {
      user: 'Aluno CEFET-MG',
      text: '"Legau"',
      user_id: 0
    },
    {
      user: 'Thales Brant',
      text: 'Gostei não zé.',
      user_id: 3
    },
    {
      user: 'Guilherme Andrade',
      text: 'Tão bom que comi três vezes.',
      user_id: 4
    }
  ];

  $scope.doComment = function() {
    $scope.comments.push({user: 'Aluno CEFET-MG', text: $scope.commentData.text, user_id: 0});
    $scope.commentData.text = null;
  };

  $scope.deleteComment = function(index) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Remover comentário',
        template: 'Você tem certeza que deseja remover este comentário?',
        cancelText: 'Cancelar',
        okText: 'Excluir'
      });
      confirmPopup.then(function(res) {
      if(res) {
        $ionicLoading.show({
          template: 'Removendo comentário...'
        });
        $timeout(function() {
          $ionicLoading.hide();
          $scope.comments.splice(index, 1);
        }, 1000);
      }
    });
  }

});