(function() {
    'use strict';
    
    angular
        .module('angularJsExample')
        .provider('BooksService', BooksService);


    function BooksService () {
    	this.$get = getService;
    	
    	getService.$inject = [];
    	
    	function getService(){
        	return {
                getBooks: getBooks,
                getBook: getBook
            };
        
	        function getBooks () {
	        	
	        	var libros = [
                     {
                    	 id: 1,
                    	 nombre: "El señor de los anillos",
                    	 autor: "Tolkien"
                     },
                     {
                    	 id: 2,
                    	 nombre: "El color de la magia",
                    	 autor: "Terry"
                     }
                 ];
	        	
	        	return libros
				
	        	
	        }
	        
	        function getBook(id){
	        	if(id==1){
	        		return {
                   	 id: 1,
                	 nombre: "El señor de los anillos",
                	 autor: "Tolkien",
                	 fecha: "Marzo de 1950"
	        		} 
	        	}else if(id==2){
	        		return {
		        		id: 2,
	                   	 nombre: "El color de la magia",
	                   	 autor: "Terry",
	                	 fecha: "Marzo de 1980"
		        		}
	        	}
	        	
	        }
        }
    }
})();
