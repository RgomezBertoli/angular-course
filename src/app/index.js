import uiRouter from 'ui-router';
import features from '../features';
import core from '../core';
import config from './config';

const modulo = angular
    .module('app', [
        'templates',
        uiRouter,
        features,
        core
    ])
    .config(config)
    .name;

export default modulo;