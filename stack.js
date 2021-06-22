/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.data = []
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let node = new Node(val);
    this.data.push(node);
    this.size += 1;
    this.first = this.data[this.size - 1];
    if (this.size >= 2) this.data[this.size - 2].next = node;
    this.last = this.data[0]
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size === 0) throw new Error('Cannot remove from empty stack');
    let removed = this.data.pop();
    this.size -= 1;
    if (this.size > 0) this.first = this.data[this.size - 1];
    return removed.val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size > 0) return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
