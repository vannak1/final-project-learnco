angular.module('learnExchange')
  .controller('MainController', ['$scope', 'questions', 'Auth', function($scope, questions, Auth){
    $scope.questions = questions.questions;

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
      questions.upvote(question);
    };

    $scope.orderProp = '-votes';

    $scope.showForm = false;
}]);
