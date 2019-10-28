class Member {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getName(){
        return `${this.lastName} ${this.firstName}`;
    }
};

let m = new Member('tanaka', 'satou');
console.log(m.getName());

