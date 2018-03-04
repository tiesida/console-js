//实力代码
    //定义一个简单的加法函数addition
    function addition(a, b) {
        //调用console.count()方法
        console.count('addition function called times:');
        return a + b;
    }

    //声明一个变量
    var sum = 0;
    for(var i = 0; i < 20; i++) {
        if(i % 2 == 0) {
            console.log('[' + sum + ',' + i + ']')
             sum = addition(sum, i);
        }
    }
    console.log(sum);

    //说明
    //console.count()方法用于统计代码块被执行的次数，
    //console.count()参数是可选的标题，方便阅读