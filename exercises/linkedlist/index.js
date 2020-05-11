// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(val) {
    if (!this.head) {
      const node = new Node(val);
      this.head = node;
      this.tail = node;
      return;
    }

    const prevHead = this.head;
    const newNode = new Node(val, prevHead);
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  removeFirst() {
    let prevHead = this.head;
    this.head = prevHead.next;
    prevHead = null;
  }
}

module.exports = { Node, LinkedList };
