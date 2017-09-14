import lsService from './local-storage-service';
import ngFile from './ng-file';
import courseForm from './course-form';
import component from './component';
import config from './config';

angular.module('app', [
    'templates',
    'ui.router'
])
.service('$localStorage', lsService)
.directive('ngFile', ngFile)
.directive('courseForm', courseForm)
.component('formComponent', component)
.config(config);