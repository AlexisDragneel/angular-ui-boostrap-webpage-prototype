var project = angular.module('maclamApp', ['ui.bootstrap']);

project.controller('maclamCtrl', ['$scope', function($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;
    slides.push({
        image: 'public/images/01.jpg',
        text: 'texto 1',
        id: currIndex++
    });
    slides.push({
        image: 'public/images/01.jpg',
        text: 'texto 2',
        id: currIndex++
    });

}]);

project.controller('authsCtrl', ['$scope', function($scope) {
    $scope.auths = [{
        image: 'public/images/diaz.jpg',
        name: 'Dr. Alberto Díaz Díaz',
        text: 'Currently researcher and professor in the research center CIMAV (Centro de Investigación en Materiales Avanzados S.C.).'
    }, {
        image: 'public/images/diaz.jpg',
        name: 'Dr. Alberto Díaz Díaz',
        text: 'Currently researcher and professor in the research center CIMAV (Centro de Investigación en Materiales Avanzados S.C.).'
    }, {
        image: 'public/images/diaz.jpg',
        name: 'Dr. Alberto Díaz Díaz',
        text: 'Currently researcher and professor in the research center CIMAV (Centro de Investigación en Materiales Avanzados S.C.).'
    }];
}]);

project.controller('newsCtrl', ['$scope', function($scope) {
    $scope.news = [{
        image: 'public/images/01.jpg',
        title: 'MACLAM',
        notice: 'Is a friendly tool which makes possible to carry out a mechanical analysis of composite materials and multi-layered structures. MACLAM has three modules',
    }];
}]);