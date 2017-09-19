import uiRouter from 'ui-router';
import config from './config';

const modulo = angular
    .module('app.tasks', [
        'templates',
        uiRouter
    ])
    .config(config)
    .name;

export default modulo;