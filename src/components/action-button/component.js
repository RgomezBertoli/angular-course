import controller from './controller';

export default {
    bindings: {
        label: '@',
        tap: '&'
    },
    controller,
    controllerAs: 'vm',
    templateUrl: 'src/components/action-button/template.html'
};