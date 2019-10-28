let Animal = function(){};

Animal.prototype = {
    walk:function(){
        console.log('tokotoko...');
    }
};

let SuperAnimal = function(){};

SuperAnimal.prototype = {
    walk:(){
        console.log('dadada...');
    }    
};

