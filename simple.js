let Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function(){
        return `${this.lastName} ${this.firstName}`;
    }
}

let man = new Member('tanaka', 'taro');

console.log(man.getName());