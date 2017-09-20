const url = 'https://to-do-course.herokuapp.com/';

export default class TasksController {
    constructor($http, $localStorage, $state) {
        this._http = $http;
        this._ls = $localStorage;
        this._state = $state;
    }

    onInit() {
        this._http.get(url + 'private/tasks')
            .then(res => {
                this.tasks = res.data.tasks;
            });
    }

    logout() {
        this.$localStorage.delete('token');
        this._state.go('login');
    }

    addTask() {
        const body = this.newTask;

        this._http.post(url + 'private/tasks', body)
            .then(res => {
                this.tasks.push(res.data.task);
                this.newTask = {};
            });
    }
}