//示例代码  
function add(a,b){  
    console.trace();  
    return a+b;  
}  
var x = add3(1,1);  
function add3(a,b){return add2(a,b);}  
function add2(a,b){return add1(a,b);}  
function add1(a,b){return add(a,b);}  
  
//说明  
//console.trace()用来追踪函数的调用轨迹  
//可以查看函数是怎么样调用的！