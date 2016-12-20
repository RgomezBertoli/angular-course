describe('AppController', () => {
    let controller, courseController;

    beforeEach(angular.mock.module('course'));

    beforeEach(inject(_$controller_ => {
        controller = _$controller_;
        courseController = controller('appController', {});
    }));

    it('App name is Hola Mundo!!', () => {
        expect(courseController.name).toEqual('Hola Mundo!!');
    });
});