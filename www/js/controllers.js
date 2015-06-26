angular.module('starter.controllers', [])

// .controller('DashCtrl', function($scope) {})

.controller('SessionsCtrl',['$scope', 'Sessions', function($scope,Sessions){
  // $scope.sessions = Sessions.all();
  Sessions.getSessionData().success(function(data){
    // console.log('getSessionData(in ctrl):', data.sessions)
    $scope.sessions = data.sessions;
    // $scope.sessions = data;
    // $scope.whichspeaker = $state.params.sessionId;
  });

  $scope.toggleStar = function(item) {
    // console.log('slide row...')
    //simply just toggle the star
    item.star = !item.star;
  }

  $scope.doRefresh = function() {
    // $scope.sessions = Sessions.all();
    $scope.$broadcast('scroll.refreshComplete');
  }


}])

// .controller('SessionDetailCtrl',['$scope','$stateParams', 'Sessions', function($scope, $stateParams, Sessions){
//   $scope.session = Sessions.get($stateParams.sessionId);
// }])

.controller('SessionDetailCtrl',['$scope','$stateParams','Sessions', function($scope,$stateParams, Sessions){
  // var sessionId = $stateParams.sessionId;
  // Sessions.getASession().success()// try calling a promise here...
  $scope.session = Sessions.getASession($stateParams.sessionId);
}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
