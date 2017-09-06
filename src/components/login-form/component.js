import controller from './controller';

const component = {
    bindings: {
        user: '<',
        click: '&'
    },
    templateUrl: 'src/components/login-form/template.html',
    controller,
    controllerAs: 'vm'
};

export default component;