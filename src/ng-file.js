export default function () {
    function link(scope, elem) {

        elem.on('change', function () {

            const file = elem[0].getAttribute('ng-file');
            const environment = file.split('.');

            let fn = environment.reduce((acc, elem) => {
                return acc[elem];
            }, scope);

            fn.call(scope[environment[0]], elem[0].files);
        });
    }

    return {
        restrict: 'A',
        link
    };
}