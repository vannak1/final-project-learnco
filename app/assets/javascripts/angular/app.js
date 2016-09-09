angular.module('learnExchange', ['ui.router', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'main/_main.html',
        controller: 'MainController',
        abstract: true,
        resolve: {
          questionPromise: ['questions', function(questions){
            return questions.getQuestions();
          }]
        }
      })
      .state('main.detail', {
        url: '/main-detail',
        templateUrl: 'main/_mainDetail.html'
      })
      .state('main.normal', {
        url: '',
        templateUrl: 'main/_mainNormal.html'
      })
      .state('questions', {
        url: '/questions/{id}',
        templateUrl: 'questions/_questions.html',
        controller: 'QuestionsController',
        resolve: {
          question: ['$stateParams', 'questions', function($stateParams, questions){
            return questions.getShow($stateParams.id);
          }]
        }
      })
      .state('about', {
        url: 'main/about',
        templateUrl: 'about.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      });
});
