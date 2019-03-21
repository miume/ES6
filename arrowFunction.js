//箭头函数
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);
console.log(upperizedNames)
//普通函数可以是函数声明或者函数表达式，但是箭头函数始终都是表达式，
//全程是箭头函数表达式，因此仅在表达式有效时才能使用

//存储在变量中
const greet = name => `Hello ${name}`;
console.log(greet('yangmei'))
//当作参数传递给函数
//存储在对象的属性中
