let Member = function(firstName, lastName, age, gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age
};

Member.prototype = {
    getName:function(){
        return `${this.lastName} ${this.firstName}\n`
    },
    allInfo:function(){
        return `Name: ${this.firstName} ${this.lastName}\nAge: ${this.age}\nGender: ${this.gender}\n`
    }
};

let m = new Member('tanaka', 'satou', 20, 'man')
console.log(m.getName());
console.log(m.allInfo());