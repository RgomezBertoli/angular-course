import controller from './controller';

export default function($stateProvider){

    $stateProvider
        .state('tasks', {
            parent: 'app',
            url: 'tasks',
            controller,
            controllerAs: 'vm',
            templateUrl: 'src/features/tasks/template.html',
            onEnter: ['$state', '$localStorage', function($state, $localStorage){
                const token = $localStorage.get('token');

                if(token){
                    return Promise.resolve();
                } else {
                    $state.go('login');
                    return Promise.reject('NOT AUTHORISED');
                }
            }]
        });
}