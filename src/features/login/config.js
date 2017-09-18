import controller from './controller';

export default function($stateProvider){

    $stateProvider
        .state('login', {
            parent: 'app',
            url: 'login',
            controller,
            controllerAs: 'vm',
            templateUrl: 'src/features/login/template.html'
        });
}