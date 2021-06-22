/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {

    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
      this.size += 1;
      return undefined;
    }
    let current = this.last;
    current.next = node;
    this.last = node;
    this.size += 1;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let val = this.first.val;
    if (this.size === 0) throw new Error('Cant dequeue from empty queue');
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
      return val;
    } else {
      this.first = this.first.next;
      this.size -= 1;
      return val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size > 0) {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
