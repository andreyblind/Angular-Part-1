var app = angular.module("chatApp",[]);
app.controller('chatController', function($scope){
    $scope.messages =[
        {author: "andrii", text: 'hi world'},
        {author: "igor", text: 'yo man'},
        {author: "andrii", text: 'hello'}
    ];
    $scope.newMessage = null;
    $scope.addNewMessage = function(){
        if($scope.newMessage) {
            $scope.messages.push({author: 'default', text: $scope.newMessage});
            $scope.newMessage = null;
        }
    }

});
