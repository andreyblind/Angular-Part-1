var app = angular.module("chatApp",['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: '/static/app/views/index.html'
            })
            .when('/chat',{
                templateUrl: '/static/app/views/chat.html',
                controller: 'chatController'
            })
    })
.controller('chatController',['$scope', '$interval','$http', function($scope, $interval, $http) {

    $scope.newMessage = null;
    $scope.messages = [];
    $scope.name = "";
    $scope.displayChat = false;

    $scope.showChat = function(){
        if($scope.name.length > 2){
            $scope.displayChat = true;
        }
    };
    var ajaxInterval = $interval(function(){
        $http.get('/messages').then(function(response){
            if (response.status == 200){
                $scope.messages = response.data;
            }
        });
    }, 3000);
    $scope.addNewMessage = function(){
        if($scope.newMessage) {
            $http({method: 'POST',
                url: '/addmessage',
                data:{name: $scope.name, message: $scope.newMessage}}).then(function(){
                    console.log("1");
            })
        }
        $scope.newMessage = null;
    }
}]);
