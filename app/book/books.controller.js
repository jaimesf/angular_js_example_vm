(function() {
    'use strict';

    angular
        .module('angularJsExample')
        .controller('BooksController', BooksController);

    BooksController.$inject = ['BooksService'];

    function BooksController (BooksService) {
        var vm = this;
        
        vm.libros = BooksService.getBooks();
        		
        
    }
})();
