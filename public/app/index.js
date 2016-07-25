var app = angular.module("chatApp",[])
.controller('chatController',['$scope', '$interval','$http', function($scope, $interval,$http) {

    $scope.newMessage = null;
    $scope.messages = [];


    var ajaxInterval = $interval(function(){
        $http.get('/messages').then(function(response){
            if (response.status == 200){
                $scope.messages = response.data;
                console.log(response.data);
            }
        });
    }, 4000);
    $scope.addNewMessage = function(){
        console.log("send:"+$scope.newMessage);
        if($scope.newMessage) {
            $http({method: 'POST',
                url: '/addmessage',
                data:{name: "jphn doe", message: $scope.newMessage}}).then(function(){
                    console.log("1");
            })
        }
        $scope.newMessage = null;
    }


}]);
