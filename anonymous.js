function arrayWalk(data, f){
    for(let key in data){
        f(data[key], key);
    }
}

//匿名関数
let ary = [1, 2, 4, 8, 16];
arrayWalk(ary, function(value, key){
    console.log(key + ':' + value);
});