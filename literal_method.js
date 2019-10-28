let member = {
    name: 'tanakatro',
    birth: new Date(2000, 5, 20),
    toString(){
        return `${this.name}/birth: ${this.birth.toLocaleDateString()}`;
    }
};

console.log(member.toString());