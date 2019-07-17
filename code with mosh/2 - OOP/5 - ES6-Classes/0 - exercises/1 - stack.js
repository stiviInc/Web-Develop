/*
    Create a Stack Class with these following methods:
    1.- push()  ---> add a value to the top of the stack!
    2.- pop()   ---> return the value at the top removing it from the stack
    3.- peek()  ---> return the value at the top without removing from the stack

    And also add the next property (Only read permission!):
    count       ---> This property have to return the numbers of values are in the stack!
*/

const _stack = new WeakMap();
class Stack {
  constructor() {
    _stack.set(this, []);
  }

  push(value) {
    _stack.get(this).push(value);
  }

  pop() {
    const items = _stack.get(this);
    if (items.length <= 0) throw new Error("There is no elements in the stack");
    return items.pop();
  }

  peek() {
    const items = _stack.get(this);
    if (items.length <= 0) throw new Error("There is no elements in the stack");
    console.log(items[items.length - 1]);
  }
  
  get count(){
      return _stack.get(this).length;
  }

  /*    show all elements of the stack!
  get _stack() {
    return _stack.get(this);
  }
  */
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
