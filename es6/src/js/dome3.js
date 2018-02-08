// 正则新增特性
// 构造函数的变化
// 正则方法的拓展
// u修饰符
// y修饰符
// s修饰符

//new一个正则对象
{
    // es5
    let regex = new RegExp('abc','i');
    let regex2 = new RegExp(/abc/i);

    console.log(`regex:${regex.test('abc123')},regex2:${regex2.test('bcd')}`);

    //es6
    let regex3 =new RegExp(/abc/ig, 'i');
    console.log(regex3.flags);//flages es6中新增用于获取修饰符的属性，i
}
{
    let s = 'aaa_aa_a'
    let a1 = /a+/g;
    let a2 = /a+/y;

    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));

    // stiky,判断是否开启了y匹配
    console.log(a1.sticky,a2.sticky);
}
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));

    console.log(/\u{61}/.test('a'));
    console.log(/\u{61}/u.test('a'));

    console.log('\u{20BB7}');

    console.log('')
}
