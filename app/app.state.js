(function() {
    'use strict';

    angular
        .module('angularJsExample')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
           	 'content@': {
                    templateUrl: 'app/book/books.html',
                    controller: 'BooksController'
                }
           },
        });
    }
})();
