var app = angular.module("chatApp",[])
.controller('chatController',['$scope', '$interval','$http', function($scope, $interval,$http) {
    $scope.messages =[

    ];
    $scope.newMessage = null;
    var ajaxInterval = $interval(function(){
        $http.get('/messages').then(function(response){
            if (response.status == 200){
                console.log(response.data);
            }
        });
    }, 2000);
    $scope.addNewMessage = function(){
        if($scope.newMessage) {
            $scope.messages.push({author: 'default', text: $scope.newMessage});
            $scope.newMessage = null;
        }
    }

}]);
