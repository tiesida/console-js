//示例代码  
//数组  
var dataArr = [  
    [111, 222, 332],  
    [442, 555, 666]  
];  
console.table(dataArr);  
  
//JSON对象  
var dataJson = [  
    {'a':'1.11', 'b':'2.2'},  
    {'a':'11.1', 'b':'22.2'},  
    {'a':'111.1', 'b':'222.2'}  
];  
console.table(dataJson);  
  
//说明  
//table方法用于把data对象用表格的方式显示出来，  
//在显示数组或格式一样的JSON数据时很有用：