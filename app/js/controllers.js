angular.module('ChallengeApp',[])

.controller('challengeController', ['$scope', '$http', function ($scope, $http) {
    $scope.challengeData;

    var url = "http://roberval.chaordicsystems.com/challenge/challenge.json?callback=JSON_CALLBACK";

    $http.jsonp(url);
        window.X = function(data){
          $scope.challengeData = data;
        }
}]);
