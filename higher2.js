function arrayWalk(data, f){
    for(let key in data){
        f(data[key], key);
    }
}

let result = 0;
function sumElement(value, key){
    result += value; 
}

let ary = [1, 2, 4, 8, 16];
arrayWalk(ary, sumElement);
console.log('合計値:' + result);