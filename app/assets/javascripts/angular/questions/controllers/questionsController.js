angular.module('learnExchange')
  .controller('QuestionsController', ['$scope', 'questions', 'question',
                              function($scope, questions, question){
  $scope.question = questions.question;

  $scope.addAnswer = function(){
    if($scope.body === '') { return; }
    $scope.addAnswer(question.id, {
      body: $scope.body,
      author: 'user',
      votes: 0
    }).success(function(answer){
      $scope.question.answers.push(answer);
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(answer){
    questions.upvoteAnswer(question, answer);
  };
}]);
