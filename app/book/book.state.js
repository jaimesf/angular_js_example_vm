(function() {
    'use strict';

    angular
        .module('angularJsExample')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider
        .state('books', {
            parent: 'app',
            url: '/books',
            views: {
                'content@': {
                    templateUrl: 'app/book/books.html',
                    controller: 'BooksController',
                    controllerAs: 'vm'
                }
            },
            onEnter: ['$rootScope', function($rootScope) {
                $rootScope.title= 'Libros';
            }],
            resolve: {
            	
            }
        })

        .state('book-detail', {
            parent: 'books',
            url: '/{id}',
            onEnter: ['$rootScope', function($rootScope) {
                $rootScope.title= 'Detalle de libro';
            }],
            views: {
                '': {
                    templateUrl: 'app/book/book-detail.html',
                    controller: 'BookDetailController',
                    controllerAs: 'vm'
                }
            },
            
            resolve: {
            	book: ['$stateParams', 'BooksService', function($stateParams, BooksService) {
                    return BooksService.getBook($stateParams.id);
                }],
            }
        })
        
        
        
        
        
       
    }

})();
