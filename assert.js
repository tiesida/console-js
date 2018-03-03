//示例代码  
//声明一个名为People的构造函数  
function People(name,age,performance){  
        this.name = name;  
        this.age = age;  
        this.performance = performance;  
}  
//引用上面的构造函数People,声明变量people  
var people =new People("john",20,[80,90,99]);  
//调用console.assert()方法  
console.assert( people.performance.length == 3, "长度不准确");  

//引用上面的构造函数People,声明变量people  
var sir =new People("alist",20,[80,90,99,1]);  
//调用console.assert()方法  
console.assert( sir.performance.length == 3, "长度不准确");  
  
//说明  
//上面在调用console.assert()的意思是：  
//如果people.performance.length == 3返回的结果是true，  
//就不输出"长度不准确"；  
//如果people.performance.length == 3返回的结果是false，  
//就输出"长度不准确"； 