function Triangle(){
    let _base;
    let _height;
    
    Object.defineProperty(this, 'base', {
        get:function(){
            return _base;
        },
        set:function(base){
            if(typeof base === 'number' && base > 0){
                _base = base;
            }
        }
    });
    
    Object.defineProperty(this, 'height', {
        get:function(){
            return _height;
        },
        set:function(height){
            _height = height;
        }
    });

}

Triangle.prototype.getArea = function(){
    return this.base * this.height / 2;
}

let t = new Triangle();
t.base = 10;
t.height = 2;
console.log(`Triangle Base: ${t.base}`);
console.log(`Triangle Height: ${t.height}`);
console.log(`Triangle Area: ${t.getArea()}`)