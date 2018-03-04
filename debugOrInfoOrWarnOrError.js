//console以上方法支持类似C语言的占位符，
  //如 %s=>字符串, %d=>整数, %f=>浮点数, %o=>object

  //示例代码
  console.log('I %s more than %d %o.', 'want', 3, {animal: 'dogs', color: 'black'});
  console.debug('I like', {'a': 'Dog', 'b': 'Cat'}, 'A');
  console.debug('I %s more than %d %o.', 'want', 3, {animal: 'dogs', color: 'black'});

  console.info('I like', {'a': 'Dog', 'b': 'Cat'}, 'A');
  console.info('I %s more than %d %o.', 'want', 3, {animal: 'dogs', color: 'black'});

  console.warn('I like', {'a': 'Dog', 'b': 'Cat'}, 'A');
  console.warn('I %s more than %d %o.', 'want', 3, {animal: 'dogs', color: 'black'});

  console.error('I like', {'a': 'Dog', 'b': 'Cat'}, 'A');
  console.error('I %s more than %d %o.', 'want', 3, {animal: 'dogs', color: 'black'});

  //说明
  //上面几个方法比较简单，就不细说了