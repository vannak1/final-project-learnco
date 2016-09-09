angular.module('learnExchange')

.factory('questions', ['$http', function($http){
  var service = {
    questions: [],
    question: []
  }

  service.getQuestions = function(){
    return $http.get('/questions.json').success(function(data){
      angular.copy(data, service.questions);
    });
  };

  service.getShow = function(id){
    return $http.get('/questions/' + id + '.json').success(function(data){
      angular.copy(data, service.question);
    })
  };

  service.create = function(question){
    return $http.post('/questions.json', question).success(function(data){
      service.questions.push(data);
    });
  };

  service.addAnswer = function(id, answer){
    return $http.posts('/questions/' + id + '/answers.json', answer);
  };

  service.upvote = function(question){
    return $http.put('/questions/' + question.id + '/upvote.json')
      .success(function(data){
        question.votes += 1;
      });
  };

  service.upvoteAnswer = function(question, answer){
    return $http.put('/questions/' + question.id + '/answers/' + answer.id + '/upvote.json')
      .success(function(data){
        answer.votes += 1;
      });
  };

  return service;

}]);
