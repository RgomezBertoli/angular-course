import component from './component';
import config from './config';

const modulo = angular
    .module('common.login', [
        'templates',
        'ui.router'
    ])
    .component('login', component)
    .config(config)
    .name;

export default modulo;