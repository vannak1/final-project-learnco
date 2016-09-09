angular.module('learnExchange', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: '_main.html',
        controller: 'MainController',
        resolve: {
          questionPromise: ['questions', function(questions){
            return questions.getQuestions();
          }]
        }
      })
      .state('questions', {
        url: '/questions/{id}',
        templateUrl: '_questions.html',
        controller: 'QuestionsController'
      });
});
