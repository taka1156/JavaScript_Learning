let Wings = {};

Wings.Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

Wings.Member.prototype = {
    getName:function(){
        return `${this.lastName} ${this.firstName}`;
    }
};

let mem = new Wings.Member('tanaka', 'satou');
console.log(mem.getName());