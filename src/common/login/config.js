export default function ConfigLogin($stateProvider) {

    $stateProvider
        .state('login', {
            parent: 'app',
            url: 'login',
            template: '<login></login>'
        });
}