const url = 'https://to-do-course.herokuapp.com/';

export default class LoginController{
    constructor($http, $localStorage, $state){
        this._http = $http;
        this._ls = $localStorage;
        this._state = $state;
    }

    $onInit(){}

    goRegister(){
        this._state.go('register');
    }

    login(){
        const body = this.user;

        this._http.post(url + 'public/login', body)
            .then(res => {
                this._ls.set('token', res.data.token);
                this._state.go('tasks');
            });
    }
}