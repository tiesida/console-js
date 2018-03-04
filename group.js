// console.groupCollapsed()方法
//       console.groupEnd()方法

      //示例代码
      console.group('第一组');
      console.log('1.1');
      console.log('1.2');
      console.log('1.3');
      console.groupEnd();

      console.groupCollapsed('第二组');
      console.log('2.1');
      console.log('2.2');
      console.log('2.3');
      console.groupEnd();

      //说明
      //console.group()默认展开
      //console.groupCollapsed()默认关闭
      //console.groupEnd()结束分组