export default class GenericInputController {
    constructor(){
    }

    $onChanges(changes){
        if(changes.label){
            this.label = changes.label.currentValue;
        }
        if(changes.type){
            this.type = changes.type.currentValue;
        }
    }

    $onInit(){
        this.type = 'text';        

        this.model.render = ()=>{
            this.value = this.model.$viewValue;
        };
    }

    onInputChange(){
        this.model.$setViewValue(this.value);
    }
}