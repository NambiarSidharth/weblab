let stack =[]

function stack1(){
  stack.unshift(5)
  console.log(stack)
  stack.unshift(4)
  console.log(stack)
  stack.unshift(2)
  console.log(stack)
  stack.shift()
  console.log(stack)
  stack.shift()
}
stack1()
let queue=[]

function queue1(num){
  queue.push(5)
  console.log(stack)
  queue.shift()
  console.log(stack)
  queue.push(4)
  console.log(stack)
  queue.push(3)
  console.log(stack)
  queue.push(2)
  console.log(stack)
  queue.shift()
  console.log(stack)
  queue.shift()
  console.log(stack)
}
queue1()
