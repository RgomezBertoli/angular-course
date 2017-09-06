import component from './component';
import config from './config';
import common from '../common';
import components from '../components';

const modulo = angular
    .module('course', [
        'templates',
        'ui.router',
        common,
        components
    ])
    .component('app', component)
    .config(config)
    .name;

export default modulo;