{
    let arr = Array.of(3,4,5,6,7);
    // arr = Array.of(9);
    console.log('arr',arr);

    let empty = Array.of();
    console.log(empty);
}
{
    // 将伪数组对象转化为数组 form 转换时会遍历一次
    let p = document.querySelectorAll('p');
    console.log(p);
    let pArr = Array.from(p);
    console.log(pArr);
    pArr.forEach(function(item){
        console.log(item.textContent);
    });
    // 转化时还会遍历
    console.log('-----------')
    Array.from([1,2,3,4],function(item){
        console.log(item*2);
    });
}
{
    console.log('fill',[1,2,3,undefined,5].fill(7));
    console.log([1,2,3,undefined,5].fill(7,2,4));
}

{
    let arr = [1,2,3,'ad', 'asd']

    for(let index of arr.keys()){
        console.log(index)
    }

    for(let value of arr.values()){
        console.log(value);
    }

    for(let [index,value] of arr.entries()){
        console.log(index,value);
    }

}
{
    console.log([1,2,3,4,5,6,7].copyWithin(2,3,6))
}
{
    console.log([1,2,3,4,5,6].find(function(item){
        return item > 3;
    }));


    console.log([1,2,3,4,5,6].findIndex(function(item){
        return item > 3;
    }));
}

{
    let arr = [1,2,3,4,5,NaN];
    console.log(arr.includes(NaN));
    console.log(arr.includes(1));
}