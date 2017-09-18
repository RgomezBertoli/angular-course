export default function (){
    this.set = set;
    this.get = get;

    function set(key, value){
        window.localStorage.setItem(`ls.${btoa(key)}`, btoa(JSON.stringify({value})));
    }

    function get(key){
        const value = window.localStorage.getItem(`ls.${btoa(key)}`);

        return value ? JSON.parse(atob(value)).value : undefined;
    }
}