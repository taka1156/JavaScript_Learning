function hoge(){
    let args = Array.prototype.slice.call(arguments);
    console.log(args.join('/'));
};

hoge('Angular', 'React', 'Vue');