export default {
    bindings:{
        fn: '&'
    },
    controller: ComponentController,
    controllerAs: 'com',
    templateUrl: 'src/component.html'
};

class ComponentController{
    constructor(){}

    $onInit(){}

    $onChanges(){}

    click(){
        this.fn({$event:{user:this.user}});
    }
}