import controller from './controller';

export default {
    bindings:{
        label: '@',
        type: '@'
    },
    require:{
        model: 'ngModel'
    },
    controller,
    controllerAs: 'vm',
    templateUrl: 'src/components/generic-input/template.html'
};