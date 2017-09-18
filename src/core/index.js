import lsService from './services/local-storage';
import config from './config';

const modulo = angular
    .module('core', [])
    .service('$localStorage', lsService)
    .config(config)
    .name;

export default modulo;