//示例代码  
    console.time('time');  
    for(var i = 0; i < 1000; i++) {  
        for(var j = 0; j < 1000; j++) { }  
    }  
    console.timeEnd('time');  
  
    //说明  
    //计算time和timeEnd之间代码块的执行时间并显示  
    //从而来判断JavaScript语法的性能 