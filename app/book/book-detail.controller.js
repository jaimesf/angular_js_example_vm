(function() {
    'use strict';

    angular
        .module('angularJsExample')
        .controller('BookDetailController', BookDetailController);

    BookDetailController.$inject = ['book'];

    function BookDetailController (book) {
        var vm = this;
        
        vm.libro = book;

        		
        
    }
})();
