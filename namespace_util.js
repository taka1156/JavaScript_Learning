// no run 
function namespace(ns){
    let names = ns.split('.');
    let parent = window;

    for(let i = 0; i < names.length; i++){
        parent[names[i]] = parent[names[i]] || {};
    }
    return parent;
}

let my = namespace('Wings.taka.Js.MyApp');
my.Person = function(){};
let p = new my.Person();
console.log(p instanceof Wings.taka.Js.MyApp.Person);