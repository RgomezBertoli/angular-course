export default class LoginFormController {

    constructor() {}

    $onChanges(changes) {
        if (changes.user) {
            this.user = Object.assign({}, this.user);
        }
    }

    onSubmit() {
        if (!this.user.name && !this.user.pass) return;

        this.click({
            $event: {
                user: this.user
            }
        });
    }
}