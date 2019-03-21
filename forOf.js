//for of循环
//可以循环任何可迭代类型的数据：String,Array,Map,Set
//默认情况下，对象不可迭代

//for循环最大的缺点：需要跟踪计数器和退出条件
//for in :循环访问所有可枚举的属性
var digits = [11, 1.12345, 2, 3, 4, 5, 6, 7]
// for (const index in digits){
//   console.log(digits[index])
// }

Array.prototype.decimalfy = function() {
  for (let i = 0; i < this.length; i++){
    this[i] = this[i]*2;
  }
};
// for( const index in digits){
//   console.log(digits[index])
// }

//for of循环用于循环访问任何可迭代的数据类型
// for (const digit of digits){
//   console.log(digit)
// }
//(1)可以随时停止或退出for..of循环
// for (const digit of digits){
//   if(digit % 2 === 0){
//     break;
//   }
//   console.log(digit)
// }

//(2)不用担心向对象中添加新的属性，for..of循环只循环访问对象只的值
// for( const digit of digits){
//   console.log(digit)
// }


//展开运算符（用连续三个点表示...）,将字面量对象展开为多个元素
const books = ["don quisd","aldfces","lives in Ameria"]
console.log(...books)

//(1)展开运算符的用途：结合数组
//之前用concat来连接数组
// const fruits = ['apple', 'banana', 'orange', 'lemo']
// const vegetables = ['corn', 'potatoes', 'carrots']
// const produce = fruits.concat(vegetables)
// console.log(produce)

//现在可以使用展开符来结合数组
// const proce = [...fruits, ...vegetables]
// console.log(proce)

//(2)剩余参数（可变参数）：使用展开运算符将数组展开为多个元素，
//使用剩余参数可以将多个元素绑定到一个数组中
//将变量赋数组值时：
const order = [20.17, 14.23, 45.45, 'cheese', 'eggs', 'milk', 'bread']
const [total, subtotal, tax, ...items] = order
console.log(total, subtotal, tax, items);

//可变参数函数
//对于参数不固定的函数，ES6之前是使用参数对象（arguments）处理
// function sum(){
//   let total = 0;
//   for(const argument of arguments){
//     total += argument
//   }
//   return total;
// }
// console.log(sum(1,3,4,5))
//ES6使用剩余参数运算符
function sum1(...nums){
  let total = 0;
  for(const num of nums){
    total += num;
  }
  return total;
}
console.log(sum1(1,2,'def'))
