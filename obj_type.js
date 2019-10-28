let Animal = function(){};
let Hamster = function(){};
Hamster.prototype = new Animal();

let a = new Animal();
let h = new Hamster();

console.log(a.constructor === Animal);
console.log(h.constructor === Animal);
console.log(h.constructor === Hamster);

console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));
