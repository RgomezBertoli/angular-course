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
        this._ls.delete('token');
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

    editTask(task){
        this._http.put(url + 'private/tasks/' + task._id, task)
        .then(res => {
            const editedTask = res.data.task;
            this.tasks = this.tasks.map(elem => {
                return elem._id === editedTask._id ? editedTask : elem;
            });
        });
    }

    deleteTask(task){
        this._http.delete(url + 'private/tasks/' + task._id)
        .then(res => {
            const deletedTask = res.data.task;
            this.tasks = this.tasks.filter(elem => {
                return elem._id !== deletedTask._id;
            });
        });
    }
}