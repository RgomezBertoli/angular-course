export default class AppController{
    constructor(){
    }

    $onInit(){
        this.checked = false;
        this.spanClass = 'color-text';

        this.alerts = ['uno', 'dos', this.saludo];
    }

    change(){
        this.checked = !this.checked;

        this.spanClass = 'color-red';
    }
}