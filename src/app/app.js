import controller from './controller';
import config from './config';

const modulo = angular
    .module('course', [
        'templates',
        'ui.router'
    ])
    .controller('appController', controller)
    .config(config)
    .name;

export default modulo;