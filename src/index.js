import lsService from './local-storage-service';
import config from './config';

angular.module('app', [
    'templates',
    'ui.router'
])
.service('$localStorage', lsService)
.config(config);