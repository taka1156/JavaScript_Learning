let i = 0;
let member = {
    name: 'tanaka taro',
    birth: new Date(2000, 5, 20),
    ['memo' + ++i]: 'third year of University',
    ['memo' + ++i]: 'I am studying programming',
    ['memo' + ++i]: 'JavaScript, Python PHP ...'
}

console.log(member);