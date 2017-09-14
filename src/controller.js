export default class AppController {
    constructor($scope, $localStorage) {
        this._$ls = $localStorage;
        this._scope = $scope;
    }

    $onInit() {
        this.checked = false;
        this.spanClass = 'color-text';

        this.alerts = ['uno', 'dos', this.saludo];
    }

    change() {
        this.checked = !this.checked;

        this.spanClass = 'color-red';

        if (this.saludo) {
            this._$ls.set('prueba', this.saludo);
        }
    }

    updateFiles(files) {
        this._scope.$apply(() => this.file = files);
    }

    login({ user }) {
        this.user = user;
    }
}