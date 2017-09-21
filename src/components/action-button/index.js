import component from './component';

const modulo = angular
    .module('action-button',[
        'templates'
    ])
    .component('actionButton', component)
    .name;

export default modulo;