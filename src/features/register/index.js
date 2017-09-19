import uiRouter from 'ui-router';
import config from './config';

const modulo = angular
    .module('app.register', [
        'templates',
        uiRouter
    ])
    .config(config)
    .name;

export default modulo;