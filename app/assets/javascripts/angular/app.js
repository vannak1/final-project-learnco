angular.module('learnExchange', ['ui.router', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('main.normal');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '_main.html',
        controller: 'MainController',
        abstract: true,
        resolve: {
          questionPromise: ['questions', function(questions){
            return questions.getQuestions();
          }]
        }
      })
      .state('main.detail', {
        url: '/main-detailed',
        templateUrl: '_mainDetailed.html'
      })
      .state('main.normal', {
        url: '/main-normal',
        templateUrl: '_mainNormal.html'
      })
      .state('questions', {
        url: '/questions/{id}',
        templateUrl: '_questions.html',
        controller: 'QuestionsController',
        resolve: {
          question: ['$stateParams', 'questions', function($stateParams, questions){
            return questions.getShow($stateParams.id);
          }]
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: '_login.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: '_register.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      });
});