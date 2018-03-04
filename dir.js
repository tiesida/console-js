//示例代码
    //声明一个名为People的构造函数
    function People(name,age,performance){
        this.name = name;
        this.age = age;
        this.performance = performance;
    }
    //引用上面的构造函数People,声明变量people
    var people =new People("john",20,[80,90,99]);
    //调用console.dir()方法
    console.dir( people );
  

    var dog = {} ;
　　dog.name = "大毛" ;
    dog.color = "黄色";
    dog.bark = function(){alert("汪汪汪");};
    console.dir(dog);

    //说明
    //在调试JavaScript程序时，有时需要转储对象的详细信息。
    //通过手工编写JavaScript代码可以完成这一工作：
    //针对对象的属性进行循环，将循环到的每一个属性值打印出来；
    //可见，这一过程是比较繁琐的，但是在具备调试工具的浏览器上，
    //通过console.dir()方法可以轻松完成