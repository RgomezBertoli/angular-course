import component from './component';

const modulo = angular
    .module('generic-input', [
        'templates'
    ])
    .component('genericInput', component)    
    .name;

export default modulo;