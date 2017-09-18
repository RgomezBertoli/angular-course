import token from './interceptors/token';

export default function ($httpProvider){

    $httpProvider.interceptors.push(token);
}