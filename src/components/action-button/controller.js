export default class ActionButtonController{
    constructor(){
    }

    $onChanges(changes){
        if(changes.label){
            this.label = changes.label.currentValue;
        }
    }

    $onInit(){
        this.label = 'Aceptar';        
    }

    onButtonClick(){
        this.tap();
    }
}