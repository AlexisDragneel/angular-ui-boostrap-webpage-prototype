var tutor = angular.module('tutoApp', []);

tutor.controller('tutoController', ['$scope', function($scope) {
    $scope.firstName = "Alexis";
    $scope.lastName = "Zapata Santana";
    $scope.quantity = 1;
    $scope.cost = 10;
    $scope.person = { firstName: 'Alexis', lastName: 'Zapata Santana' }
    $scope.array = [1, 4, 5, 7, 10];
    $scope.length = $scope.array.length
}]);

tutor.controller('tutoAnother', ['$scope', function($scope) {
    $scope.personas = personas = [
        { name: 'un nombre', age: 10 },
        { name: 'otro nombre', age: 20 },
        { name: 'Again other name', age: 90 },
    ]
}]);