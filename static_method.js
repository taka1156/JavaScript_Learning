let Area = function(){};

Area.version = '1.0';

Area.traiangle = function(base, height){
    return base * height / 2;
}

Area.diamond = function(width, height){
    return width * height / 2;
}

console.log(`Area class ver ${Area.version}`);
console.log(`Traiangle area: ${Area.traiangle(5, 3)}`);

//let a = new Area;
//console.log(`diamond area: ${a.diamond(10, 2)}`);error
