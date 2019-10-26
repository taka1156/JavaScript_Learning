let Member = function(){};

Member.prototype.gender = 'man';
let human1 = new Member();
let human2 = new Member();

console.log(human1.gender + '|' + human2.gender);
human2.gender = 'woman';
console.log(human1.gender + '|' + human2.gender);

delete human1.gender
delete human2.gender
console.log(human1.gender + '|' + human2.gender);
