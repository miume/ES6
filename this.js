//javaScript标准函数this

//1、new对象
const mySun = new Sunda('Chocolate',['Sprinkles','Hot Fudge']);

//2、指定的对象
//函数使用call/apply被调用，this的值指向指定的obj，因为call第一个参数明确设置this的指向
//call/apply 改变函数的调用对象
//call是每个函数都有的方法，允许你在调用函数时为函数指定上下文
//apply和call本质相同，但不是一个一个传参数，可以用数组传参数

//.bind和.call完全相同，除了不会立刻调用函数，而是返回一个能以后调用的新函数
const result = obj.printName.call(obj2)

//判断this关键字的引用方法
/*
（1）看this在哪里调用
（2）看是否有.点运算符，若有，则其左边就是this的指向
（3）看是否有.call / .apply /.bind
（4）看是否有new关键字
（5）是否在严格模式下，是this为undefined ，否则指向window
*/
