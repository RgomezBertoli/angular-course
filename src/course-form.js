export default function(){
    return {
        restrict: 'E',
        scope:{
            fn: '&'
        },
        bindToController: true,
        controller: CourseFormController,
        controllerAs: 'cf',
        templateUrl: 'src/course-form.html'
    };
}

class CourseFormController{
    constructor(){}

    tap(){
        this.fn({$event:{user:this.user}});
    }
}
