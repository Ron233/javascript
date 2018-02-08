// dome2
// 解构赋值  赋值的一种方式，，左边的结构 一一对应给 右边的结构 赋值
// 解构赋值分为 数组 对象  字符串  布尔 函数参数 数值结构赋值
{
    let a,b,rest;
    [a, b, rest] = [1, 2, 3]
    console.log(a,b,rest);
}
{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5];
    console.log(a, b, rest)
}
{
    let a, b, c;
    ({a, b, c} = {a:1, b:2, c:3});
    console.log(a, b, c)
}
// 默认值
// 赋予一个默认值，当声明变量是undefined的时候就赋予这个默认值
{
    let a, b, c;
    [a, b, c=3] = [1,2];//没有给c赋值，c=undefined,就被赋予默认值
    console.log(a, b, c);
}
// 数值交互
{
    console.log("数值交互");
    let a = 1, b = 2;
    console.log(`a: ${a}, b: ${b}`);
    [a, b] = [b, a];
    console.log(`a: ${a}, b: ${b}`);

}
{
    function f(){
        return [1,2];
    }
    let [a, b] = f();

    console.log(a, b);
}
{
    function f(){
        return [1, 2, 3, 4, 5, 6];
    }
    let a,b;
    [a,,,b] = f();
    console.log(a,b);
    [a, ...b] = f();
    console.log(a,b);
}
{
    let o = {p:1, q:2};
    let {p, q} = o;
    console.log(p,q);
}
{
    let {a = 10, b = 5} = {b:3};
    console.log(a,b);
}