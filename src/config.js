import controller from './controller';

export default function AppConfig($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            url: '/',
            controller,
            controllerAs: 'vm',
            templateUrl: 'src/template.html'
        });

}