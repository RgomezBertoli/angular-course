const url = 'https://to-do-course.herokuapp.com/';

export default class LoginController{
    constructor($http, $localStorage){
        this._http = $http;
        this._ls = $localStorage;
    }

    $onInit(){}

    login(){
        const body = this.user;

        this._http.post(url + 'public/login', body)
            .then(res => {
                this._ls.set('token', res.data.token);
            });
    }
}