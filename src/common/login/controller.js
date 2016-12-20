export default class LoginController {

    constructor($log) {
        this._$log = $log;
    }

    $onInit() {
        this.user = {
            name: '',
            pass: ''
        };
    }

    login({ user }) {
        this._$log.log(user);
    }
}