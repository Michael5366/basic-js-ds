const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    let result = current;

    while (current !== null) {
      current = current.next;
    }

    return result;
  }

  enqueue(value) {
    const newNode = { value: value, next: null };

    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
    }

    if (this.tail !== null) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }

    const firstVal = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return firstVal;
  }
}

module.exports = {
  Queue,
};
