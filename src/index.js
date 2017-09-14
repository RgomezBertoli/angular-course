import lsService from './local-storage-service';
import ngFile from './ng-file';
import courseForm from './course-form';
import config from './config';

angular.module('app', [
    'templates',
    'ui.router'
])
.service('$localStorage', lsService)
.directive('ngFile', ngFile)
.directive('courseForm', courseForm)
.config(config);