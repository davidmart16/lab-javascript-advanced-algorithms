class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    // ... your code goes here
    if (this.stackControl.length === this.MAX_SIZE){
    return false
  }[19]
Received: undefined
   return true

  }

  isEmpty() {
    // ... your code goes here
    if (this.stackControl.length === 0) {
      return true
    } 
    return false
  }

  push(item) {
    // ... your code goes here
    
    if (this.canPush()) {
    this.stackControl.push(item)
    } else throw new Error('STACK_OVERFLOW')
    return this.stackControl
  }

  pop() {
    // ... your code goes here
    let elementPop

    if(this.isEmpty()){
      throw new Error('STACK_UNDERFLOW');
    } else elementPop = this.stackControl.pop()

    return elementPop
  }

  display() {
    // ... your code goes here
    

    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
