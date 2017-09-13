export default class AppController{
    constructor($localStorage){
        this._$ls = $localStorage;
    }

    $onInit(){
        this.checked = false;
        this.spanClass = 'color-text';

        this.alerts = ['uno', 'dos', this.saludo];
    }

    change(){
        this.checked = !this.checked;

        this.spanClass = 'color-red';

        if(this.saludo){
            this._$ls.set('prueba', this.saludo);
        }
    }
}