angular.module('learnExchange', [])
  .factory('questions', [function(){
    var service = {
      questions: [
        {body: 'post1', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 1},
        {body: 'post2', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 2},
        {body: 'post3', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 3},
        {body: 'post4', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 4},
        {body: 'post5', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 5}
      ]
    };
    return service;
  }])
  .controller('MainController', ['$scope', 'questions', function($scope, questions){
    $scope.questions = questions.questions;

    $scope.addQuestion = function(){
      if(!$scope.body || $scope.body === '') { return; }
      $scope.questions.push({
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
      question.votes += 1;
    };
  }]);
