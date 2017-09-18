import uiRouter from 'ui-router';
import config from './config';

const modulo = angular
    .module('app.login', [
        'templates',
        uiRouter
    ])
    .config(config)
    .name;

export default modulo;