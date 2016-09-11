angular.module('learnExchange')

  .controller('UsersController', ['$scope', 'QuestionService', function($scope, QuestionService){
    $scope.userQuestions = QuestionService.userQuestions;
  }]);
