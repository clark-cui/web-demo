/* expression slot */

import React from "react";
import { render } from "react-dom";

const shoppingList = ["apple", "orange", "pear"];

const element = <div>Items left to purchase:{shoppingList.length}</div>;

const root = document.querySelector("#root");

render(element, root);

// 当在jsx中使用{}的时候，react实际做了什么？
// 答：就是把{}里面的内容，放到了createElement的下一个参数里了，其实就是当作普通的js表达式来执行。

/* your code here ! */
// compiledElement is same to the element
const compiledElement = React.createElement(
  "div",
  {},
  "Items left to purchase: ",
  shoppingList.length
);

// 如果{}里的内容是{if(shoppingList.length<5) "almost done"} 会发现不会有任何效果
// 因为js的语法，在逗号这里是不能放语句(statement)的，只能放表达式(expression)。

// 表达式和语句的区别
/*
在JavaScript中，表达式（Expression）和语句（Statement）是两个基本的构造块。

表达式（Expression）

表达式是 JavaScript 代码的一部分，它计算出一个值。例如：

3 * 7  // 这是一个表达式，结果为 21
a = 10 // 这也是一个表达式，结果为 10
x == y  // 这也是一个表达式，结果为 true 或 false
基本上，任何能产生值的东西都可以被认为是一个表达式。函数调用也是表达式，例如 console.log("Hello") 或 Math.max(1, 2, 3)。

语句（Statement）

语句是 JavaScript 中执行某种操作的一段代码，例如：

var x = 1;  // 这是一个声明语句
if (x > 1) { // 这是一个条件语句
    console.log("x is greater than 1");
}
另外，语句可以包含表达式，但表达式不能包含语句。
*/
