function printf(format){
    for(let i = 0; i < arguments.length; i++){
       let pattern = new RegExp('\\{' + (i-1) + '\\}','g');
       format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

printf('My name is {0}.','Tanaka');
printf("My name is {0}.\nI'm {1} years old.",'Tanaka', 20);