//变量的解构赋值

//1、数组的解构赋值
//ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值--解构（destructuring）

// let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(foo,bar,baz)

let [, , third] = ["foo", "bar", "baz"]
// console.log(third)

let [head, ...tail] = [1, 2, 3, 4];
// console.log('head=',head,'tail=',tail)

let [x, y, ...z] = ['a']
// console.log('x=',x,'y=',y,'z=',z)

//如果=等号的右边不是数组（不是可遍历的解构），就会报错
//报错
// let [foo] = 1;
// let [foo] = false;

//只要数据结构具有iterator接口，都可以采用数组形式的解构赋值

//解构赋值允许指定默认值
let [x1, y1='b'] = ['a']    //x:'a' y='b'
//ES6内部使用严格想等运算符（===），来判断一个位置是否有值，只有严格等于undefined，默认值才会生效
let [x2 = 1] = [null]  //x:null

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
// let [x3 = 1, y3 = x3] = [2]  //x=2 y=2
// console.log('x3=',x3,'y3=',y3)

// let [x = y, y = 1] = []   //会报错 y is not defined

//2、对象的解构赋值
//数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
let {foo1, bar1, baz1} = {foo1:'aaa', bar1:'bbb'}
// console.log('foo=',foo1,'bar=',bar1,'baz=',baz1)

//3、字符串的解构赋值
//字符串被转换成一个类似数组的对象
const [a,b,c,d,e] = 'hello'
//类似数组的对象都有一个length属性，
let {length : len} = 'hello'
console.log('len=',len)

//4、数值和布尔值的解构赋值
//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
let {toString : s} = 123
console.log(s === Number.prototype.toString)

let {toString : s1} = true
console.log(s1 === Boolean.prototype.toString)

//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
//由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错

//5、函数参数的解构赋值
function add1([x,y]){
  return x + y;
}
console.log(add1([1,2]))    //3

console.log( [[1, 2], [3, 4]].map(([a,b]) => a + b ) )

//函数参数的解构也可以使用默认值
function move({x = 0, y = 0} = {}){
  return [x, y];
}
console.log(move({x : 3, y : 8}))
console.log(move({}))


//6、解构赋值的用途
/*
（1）交换变量的值、
（2）从函数返回多个值
（3）函数参数的定义
（4）提取JSON数据
（5）函数参数的默认值
（6）变量map结构
（7）输入模块的指定方法
加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰
*/
