// let 和 const
/*
作用域
如何使用let const
*/ 
// 作用域，es5前只有两个作用域，全局作用域、函数作用域，es6新增块作用域
// 存在作用域
// function test(){
//     for(var i = 0; i<=3;i++){
//         console.log(i);
//     }
//     console.log(i);//3
// }

// function test(){
//     for(let i=0;i<3;i++){
//         console.log(i)
//     }
//     console.log(i);//报错引用错误，严格模式
// }

// test();
// 块作用域简单判别，let声明的变量被一堆大括号抱起来，这个大括号就是这个变量的块作用域
//不能重复声明
// {
//     let a = 1;
//     let a = 2;//报错
//     
// }

// const 用域定义常量，定义的常量不能修改，但定义对象和数组时要小心，对象数组的属性、元素是可以修改的，因为本质不变的是指针指向的地址，对象数组是可以变的，需要手动去冻结，和let一样是块作用域上的方法，
// const声明常量必须赋值，不能只声明
// 赋值后不能修改
// function last(){
//     const text = '3333';
//     text = 6;
//     console.log(text);
// }
// last();
// 不能声明再赋值
// {
//     const a ;//报错
//     a = 10;
// }

//const声明的对象或者数组，属性可变，但不能指向其他对象或者数组，需要手动冻结,
{
    const obj = {};
    console.log(obj);
    obj.name = '张三';
    console.log(obj);
    let obj2 = {name:'李四'};
    // obj = obj2;//报错
    // console.log(obj);

    const arr = [];
    console.log(arr);
    arr[0] = 1;
    console.log(arr);

} 

