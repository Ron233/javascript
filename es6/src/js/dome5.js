
{
    // 二进制表示 0b 0B
    console.log(0b11110);
    // 八进制 
    console.log(0o767)
}
{
    // 判断一个数是否有尽
    console.log(Number.isFinite(1))
    console.log(Number.isFinite(NaN));
    console.log(Number.isFinite(undefined))

    console.log(Number.isNaN(NaN));
    console.log(Number.isNaN(1));

    // 判断是不是整数
    console.log('判断是不是整数')
    console.log(Number.isInteger(15));
    console.log(Number.isInteger(15.0));
    console.log(Number.isInteger(15.1));
    console.log(Number.isInteger('15'));
}

{
    // 判断是否超出js的判断的安全数范围 +-2的53次方
    console.log(Number.MAX_SAFE_INTEGER);//超出js判断上限
    console.log(Number.MIN_SAFE_INTEGER);//超出下限
    console.log(Number.isSafeInteger(10));
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
}
{
    // 取小数并返回整数部分
    console.log(Math.trunc(4.1))
}
{
    // 判断是正数还是负数还是0
    console.log(Math.sign(15));
    console.log(Math.sign(-15));
    console.log(Math.sign(0));
    console.log(Math.sign('15'));
    console.log(Math.sign('foo'))
}
{
    // 立方根
    console.log(Math.cbrt(8));
    console.log(Math.cbrt(-1))
}
// 三角函数，对数方法等