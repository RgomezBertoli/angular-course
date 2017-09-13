export default function localStorageService($log){

    this.variable = undefined;

    this.set = set;
    this.get = get;

    function set(name, value){
        window.localStorage.setItem(name, JSON.stringify({value}));
    }

    function get(name){
        const value = window.localStorage.getItem(name);

        return value ? JSON.parse(value).value : undefined;
    }
}