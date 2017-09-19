import login from './login';
import register from './register';
import tasks from './tasks';

const modulo = angular
    .module('features', [
        login,
        register,
        tasks
    ])
    .name;

export default modulo;