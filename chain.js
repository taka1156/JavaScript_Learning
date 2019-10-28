let Animal = function(){};

Animal.prototype = {
    walk:function(){
        console.log('tokotoko...');
    }
};

let Dog = function(){
    Animal.call(this);
};

Dog.prototype = new Animal();

Dog.prototype.bark = function(){
    console.log('wanwan!');
};

let d = new Dog();
d.walk();
d.bark();