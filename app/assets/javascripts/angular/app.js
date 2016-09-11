angular.module('learnExchange', ['ui.router', 'templates', 'Devise'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'angular/main/templates/_main.html',
        controller: 'MainController',
        abstract: true,
        resolve: {
          questionPromise: ['QuestionService', function(QuestionService){
            return QuestionService.getQuestions();
          }]
        }
      })
      .state('main.detail', {
        url: '/main-detail',
        templateUrl: 'angular/main/templates/_mainDetail.html'
      })
      .state('main.normal', {
        url: '',
        templateUrl: 'angular/main/templates/_mainNormal.html'
      })
      .state('questions', {
        url: '/questions/{id}',
        templateUrl: 'angular/questions/templates/_questions.html',
        controller: 'QuestionsController',
        resolve: {
          questionPromise: ['$stateParams', 'QuestionService', function($stateParams, QuestionService){
            return QuestionService.getShow($stateParams.id);
          }]
        }
      })
      .state('users', {
        url: '/users/{id}',
        templateUrl: 'angular/questions/templates/_userQuestion.html',
        controller: 'UsersController',
        resolve: {
          questionPromise: ['$stateParams', 'QuestionService', function($stateParams, QuestionService){
            return QuestionService.getUsersQuestions($stateParams.id);
          }]
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'angular/main/templates/about.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'angular/auth/templates/_login.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('main.normal');
          })
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: 'angular/auth/templates/_register.html',
        controller: 'AuthController',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('main.normal');
          })
        }]
      })
});
