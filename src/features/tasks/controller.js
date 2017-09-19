const url = 'https://to-do-course.herokuapp.com/';

export default class TasksController{
    constructor($http, $localStorage, $state){
        this._http = $http;
        this._ls = $localStorage;
        this._state = $state;
    }

    $onInit(){}

    backLogin(){
        this._state.go('login');
    }

    login(){
        const body = this.user;

        this._http.post(url + 'public/register', body)
            .then(res => {
                this._ls.set('token', res.data.token);
            });
    }
}