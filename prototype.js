let Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

Member.prototype.getName = function(){
    return `${this.lastName} ${this.firstName}`
};

let m = new Member('tabaka', 'satou');
console.log(m.getName());