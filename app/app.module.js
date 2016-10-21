(function() {
    'use strict';

    angular
        .module('angularJsExample', [
            'ngResource',
            'ui.router'
        ])
        //.run(run);

    run.$inject = ['stateHandler'];

    function run(stateHandler) {
        stateHandler.initialize();
    }
})();
