export default function ConfigApp($stateProvider, $urlRouterProvider, $qProvider) {

    $urlRouterProvider.otherwise('/login');

    $qProvider.errorOnUnhandledRejections(false);

    $stateProvider
        .state('app', {
            abstract: true,
            url: '/',
            template: '<app></app>',
        });
}