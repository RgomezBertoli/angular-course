export default function ConfigApp($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app',{
            url: '/',
            templateUrl: 'src/app/template.html',
            controller: 'appController',
            controllerAs: 'vm'
        });
}