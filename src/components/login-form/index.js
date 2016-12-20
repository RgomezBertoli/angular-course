import component from './component';

const modulo = angular
    .module('components.login-form', [
        'templates'
    ])
    .component('loginForm', component)
    .name;

export default modulo;