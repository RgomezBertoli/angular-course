import genericInput from './generic-input';
import actionButton from './action-button';

const modulo = angular
    .module('components', [
        genericInput,
        actionButton
    ])
    .name;

export default modulo;