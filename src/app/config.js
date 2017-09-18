export default function($urlRouterProvider, $stateProvider){

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('app', {
            url: '/',
            abstract: true,
            templateUrl: 'src/app/template.html'
        });
}