import uiRouter from 'ui-router';
import config from './config';
import component from './component';

const modulo = angular
    .module('app.login', [
        'templates',
        uiRouter
    ])
    .config(config)
    .component('login', component)
    .name;

export default modulo;