export default class AppController{
    constructor($scope){
        this._scope = $scope;
    }

    $onInit(){
        this._scope.saludo = 'hola';
    }
}