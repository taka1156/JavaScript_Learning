function arrayWalk(data, f){
    for(let key in data){
        f(data[key], key);
    }
}

function showElement(value, key){
    console.log(key + ':' + value);
}

let ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);
