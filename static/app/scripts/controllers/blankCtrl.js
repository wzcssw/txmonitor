'use strict';
var app = angular.module('sbAdminApp')
app.controller('blankCtrl', function($scope, socket) {
    $scope.message = '';
    $scope.msg_history = "";
    //当我们看到一条从服务端发送过来的新消息时
    socket.on('new_message', function(data) {
        let message = data.message;
        $scope.msg_history = $scope.msg_history + (message + "  ");
    });
    //告诉服务端有一条新消息
    $scope.send_msg = function() {
        $scope.msg_history = $scope.msg_history + ($scope.message + "  ");
        socket.emit('new_message', { message: $scope.message });
    };
});