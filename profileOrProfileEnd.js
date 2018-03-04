//示例代码  
      function AllFunction(){  
          for(var i=0;i<10;i++){  
              functionA(100);  
          }  
          functionB(100);  
      }  
  
      function functionA(count){ for(var i=0;i<count;i++){} }  
      function functionB(count){ for(var i=0;i<count;i++){} }  
  
      console.profile('profile');  
      AllFunction();  
      console.profileEnd();  
  
      //说明  
      //分析profile和profileEnd之间代码的执行情况，即js代码的性能分析。  
      //注意，如果代码运行时间过短，则在性能分析时可能会被忽略（如上面的函数functionB）:  
      //在浏览器的开发工具中的profile面板里可以看到结果 