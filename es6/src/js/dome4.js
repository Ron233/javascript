//字符串拓展
// es6新增特性  Unicode表示法  遍历接口    模板字符串   新增方法（10种）
{
    console.log('a','\u0061');

    console.log('a','\u20BB7')

    console.log('s',`\u{20bb7}`)
     // console.log("s",`\u20BB7`);//超过unic码一个字符长度，按两个字符处理 0xffff
}

{
    let s = '𠮷';
    console.log(s.length);

    // es5
    console.log('0', s.charAt(0));
    console.log('1',s.charAt('1'));
    console.log("at0",s.charCodeAt(0));
    console.log('at1',s.charCodeAt(1));

    // es6
    let s1 = '𠮷a';
    console.log(s1.length);
    console.log('code0',s1.codePointAt(0));
    console.log('code0',s1.codePointAt(0).toString(16));
    console.log('code1',s1.codePointAt(1));
    console.log('code2',s1.codePointAt(2));
}
{
    // es5
    console.log(String.fromCharCode(`0x20BB7`));
    // es6 
    console.log(String.fromCodePoint(`0x20BB7`))
}
{
    let str = `\u{20bb7}abc`;

    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }

    for(let code of str){
        console.log(`es6`,code)
    }
}
{
    let str ='string';

    console.log('includes',str.includes('i'));
    console.log('includes',str.includes('c'));
    console.log('start',str.startsWith('str'));
    console.log('end',str.endsWith('ing'));
}
{
    let str = 'abc';
    console.log(str.repeat(3))
}
{
    let name = 'ron';
    let info = 'hello ';
    let m = `${info},I am ${name}`;
    console.log(m)
}
{
    console.log('1'.padStart(2,'0'));
    console.log('1'.padEnd(2,'0'));
    
}
// 标签模板
{
    let user = {
        name : 'ron',
        info : 'hello'
    };
  

    f`${user.name},${user.info}`;

    function f(s, v1, v2){
        // console.log(s, v1, v2);
        return s+v1+v2; 
    };
    console.log(f`${user.name},${user.info}`);
}
{
    console.log(String.raw`hi\n${1+2}`);
    console.log(`hi\n${1+2}`)
}