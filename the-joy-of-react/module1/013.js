// 为什么jsx只能return一个元素？
// 答：因为jsx最终会被编译成React.createElement()，而React.createElement()只能接受一个参数，所以jsx只能return一个元素。

// 例子

import React from "react";  

function App (){

  return(
      <h1>hello</h1>
      <h2>world</h2>
  )
}

// 上面的代码就等同于

function App (){
  // 第一个参数是元素的类型，第二个参数是元素的props，第三个参数是元素的children
  return React.createElement("h1",{},"hello")
}
