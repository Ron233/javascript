{
    function f(x, y='word'){
        console.log(x,y);
    }

    f('hello,');

    function f1(x, y='word'){
        console.log(x,y);
    }
    f1('hello,','ron');
}
{
    let x = 'text';
    function f(x,y=x){
        console.log('作用域',x, y);
    }
    f('hello');
}
{
    let x = 'text';
    function f(x,y){
        console.log(x,y)
    };
    f();
}
{
    let x = 'text';
    function f(c,y=c){
        console.log(x,y);
    };
    f('hello');
}
{
    function f(...arg){
        for(let i of arg){
            console.log(i);
        }
    };

    f(1,2,3,4,5)
}
{
    console.log(...[1,2,3]);
    console.log('a',...[1,2,3,4])
}
{

    let obj=v=>v*2;

    console.log(obj(3))
}
{
    function f(){
        return console.log('f')
    }

    function f1(x){
        
        return f(x);
    }


    f1();
}