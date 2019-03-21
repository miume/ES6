//ES6语法
/**
1、let 和const
块级作用域，在代码块{}中使用let或const声明变量，该变量会陷入暂时性死区直到该变量的声明被处理
使用let声明的变量可以重新赋值，但是不能在同一作用域内重新声明
使用const声明的变量必须赋值初始化，但是不能在同一作用域内重新声明也无法重新赋值
let：用来声明变量，let声明的变量只在它所在的代码块有效
for循环的计数器，很适合使用let命令
*/
// var a = [] , b = []
// for(var i = 0; i < 10; i++){
//   a[i] = function () {
//     console.log(i)
//   }
// }
// a[6]()

//每一次循环i其实都是一个新变量
// for(let i = 0; i < 10; i++){
//   b[i] = function () {
//     console.log(i)
//   }
// }
// b[6]()


//var声明，会发生变量提升
// console.log(foo)   //undefined
// var foo = 2

//let不存在变量提升
// console.log(bar)  //报错ReferenceError
// let bar = 2


//暂时性死区：只要块级作用域内存在let，它所声明的变量就“绑定”这个区域，不再受外界影响
// var temp = 123
// if(true){
//   temp = 'abc'
//   let temp
// }

//ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始
//就形成了封闭作用域。凡是在声明之前使用这些变量，就会报错

// if(true){
//   tmp = 'abc';      //ReferenceError
//   console.log(tmp); //ReferenceError
// }

// let tmp;
// console.log(tmp);  //undefined
//
// tmp = 123;
// console.log(tmp); //123

//死区
//因为参数x默认值等于另一个参数，但是y还没有声明，属于死区
// function bar1(x = y, y = 2){
//   return [x,y]
// }
// bar1()   //报错

function bar2(x = 2, y = x){
  return [x,y]
}
console.log(bar2())

//ES6规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量。

//let不允许在相同作用域内，重复声明 同一个变量
// function funcs(arg){
//   let arg;
// }
// funcs();   //报错

function funcs1(arg){
  {
    let arg;
  }
}
funcs1()   //正确，不会报错



//为什么需要块级作用域？
//ES5只有全局作用域和函数作用域，没有块级作用域

//问题1:内层变量可能会覆盖外层变量
var tmp1 = new Date()
function f(){
  console.log(tmp1)
  if(false){
    var tmp1 = 'hello world'  //变量提升，内层的tmp1变量覆盖了外层的tmp1变量
  }
}
f()  //undefined

//问题2:用来计数的循环变量泄漏为全局变量
// var s = 'hello';
//
// for(var i = 0; i < s.length; i++){
//   console.log(s[i])
// }
// console.log(i)   //5


//ES6引入块级作用域，明确允许在块级作用域之中声明函数。规定，块级作用域之中，函数声明语句的行为
//类似于let，在块级作用域之外不可引用
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}



//const 只读常量；一旦声明，常量的值就不能改变
//const的作用域与let命令相同：只在声明所在的块级作用域内有效
// if(true){
//   const MAX = 5;
// }
// MAX    //会报错：MAX is not defined

//const命令声明的常量也是不提升，同样存在暂时性死区，只有在声明的位置后面使用

const foo = {};
//常量foo存储的是一个地址，这个地址指向一个对象。不可变的只是这个地址，
//即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加属性
//为foo添加属性，可以成功
foo.prop = 123
console.log(foo.prop)

//将foo指向另外一个对象，就会报错
foo = {}; //TypeError:"foo" is read-only


//ES6声明变量的六种方法：var function(ES5)只要前面两种声明变量的方法 let const import class

//顶层对象的属性


//global对象
