import controller from './controller';

const modulo = angular
    .module('course', [])
    .controller('appController', controller)
    .name;

export default modulo;