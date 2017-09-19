import controller from './controller';

export default function($stateProvider){

    $stateProvider
        .state('register', {
            parent: 'app',
            url: 'register',
            controller,
            controllerAs: 'vm',
            templateUrl: 'src/features/register/template.html'
        });
}