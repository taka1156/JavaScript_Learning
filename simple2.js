let Member = function(firstName, lastName){
    if(!(this instanceof Member)){
        return new Member;
    }
    this.firstName = firstName;
    this.lastName = lastName;
};

let m = new Member('tanaka', 'satou');
console.log(m);
//console.log(firstName);error
console.log(m.firstNam);