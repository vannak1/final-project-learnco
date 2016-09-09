angular.module('learnExchange')

  .controller('UsersController', ['$scope', 'questions', function($scope, questions){
    $scope.userQuestions = questions.userQuestions;
  }]);
