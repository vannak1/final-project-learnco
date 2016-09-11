angular.module('learnExchange')
  .controller('QuestionsController', ['$scope', 'QuestionService', 'Auth',
                              function($scope, QuestionService, Auth){
  $scope.question = QuestionService.question;

  Auth.currentUser().then(function(user){
    $scope.user = user;
  });

  $scope.addAnswer = function(){
    if($scope.body === '') { return; }
    questions.addAnswer($scope.question.id, {
      body: $scope.body,
      author: 'user',
      votes: 0
    }).success(function(answer){
      $scope.question.answers.push(answer);
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(answer){
    QuestionService.upvoteAnswer($scope.question.id, answer);
  };
}]);
