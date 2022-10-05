function f() {
    let value = Math.random();
  
    return function() { alert(value); };
  }
  
  // три функции в массиве, каждая из них ссылается на лексическое окружение
  // из соответствующего вызова f()
  let arr = [f(), f(), f()];
  let a = arr[0];

  console.log(arr);