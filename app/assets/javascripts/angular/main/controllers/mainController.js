angular.module('learnExchange')
  .controller('MainController', ['$scope', 'QuestionService', 'Auth', function($scope, QuestionService, Auth){
    $scope.questions = QuestionService.questions;
    $scope.orderProp = '-votes';
    $scope.showForm = false;

    Auth.currentUser().then(function(user){
      $scope.user = user;
    });

    $scope.addQuestion = function(){
      if(!$scope.body || $scope.body === '') { return; }
      questions.create({
          body:       $scope.body,
          lessonLink: $scope.lessonLink,
          githubLink: $scope.githubLink,
          votes: 0
        });
        $scope.body = '';
        $scope.lessonLink = '';
        $scope.githubLink = '';
    };

    $scope.incrementUpvotes = function(question) {
      QuestionService.upvote(question);
    };


}]);
