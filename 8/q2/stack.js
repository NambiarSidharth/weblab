let stack =[]

function push1(num){
  stack.unshift(num)
}
function pop1(){
  stack.shift()
}

push1(2)
console.log(stack)
push1(3)
console.log(stack)
pop1()
console.log(stack)
let queue=[]

function add(num){
  queue.push(num)
}

function remove(){
  queue.shift()
}

add(2)
console.log(queue)
add(3)
console.log(queue)
remove()
console.log(queue)
