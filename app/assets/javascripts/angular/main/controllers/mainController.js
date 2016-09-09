angular.module('learnExchange')
  .controller('MainController', ['$scope', 'questions', function($scope, questions){
    $scope.questions = questions.questions;

    $scope.addQuestion = function(){
      if(!$scope.body || $scope.body === '') { return; }
      questions.create({
          body:       $scope.body,
          lessonLink: $scope.lessonLink,
          githubLink: $scope.githubLink,
          votes:      0
        });
        $scope.body = '';
        $scope.lessonLink = '';
        $scope.githubLink = '';
    };

    $scope.incrementUpvotes = function(question) {
      questions.upvote(question);
    };

}]);
