import uiRouter from 'ui-router';
import features from '../features';
import core from '../core';
import config from './config';
import components from '../components';

const modulo = angular
    .module('app', [
        'templates',
        uiRouter,
        features,
        core,
        components
    ])
    .config(config)
    .name;

export default modulo;