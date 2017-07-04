(function () {
'use strict';

angular.module('AngularApp1', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.count = 0;
  $scope.menu = '';
  $scope.messageColor = {"color" : "black"};
  $scope.messageText = 'Welcome to Lunch Checker';

  $scope.checkMenu = function(){
    var items = $scope.menu.replace(/\,[\s\,]*\,/g,',').replace(/^\,/,'').replace(/\,$/,'').split(',');
    $scope.count = items.length;

    if ($scope.menu == '' || items[0] == '' ) {
      $scope.messageColor = {"color" : "red"};
      $scope.messageText = 'Please enter data first';
    }
    else {
      $scope.messageColor = {"color" : "green"};

      if ($scope.count <= 3) {
        $scope.messageText = 'Enjoy!';
      }
      else {
        $scope.messageText = 'Too much!';
      }
    }
  }
}

})();
