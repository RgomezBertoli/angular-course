import login from './login';

const modulo = angular
    .module('features', [
        login
    ])
    .name;

export default modulo;