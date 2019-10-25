let y = 'Global';
function outerFunc(){
    let y = 'Local Outer';

    function innerFunc(){
        let z = 'Local Inner';
        console.log(z);
        console.log(y);
        //console.log(x);//エラー
    }
    innerFunc();
}
outerFunc();

//内側の関数に近いほうの変数を当てはめる