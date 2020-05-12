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
    this.head = new Node(val, this.head);

    if (!this.tail) {
      this.tail = this.head;
    }
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
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

  removeLast() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    let current = this.head;

    while (current) {
      if (current.next === this.tail) {
        this.tail = current;
        current.next = null;
        return;
      } else {
        current = current.next;
      }
    }
  }

  insertLast(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    let prevTail = this.tail;
    this.tail = newNode;
    prevTail.next = newNode;
  }
  
  getAt(index) {
    let count = 0;
    let current = this.head;   

    while(current) {
      if (count === index) {    
        return current;
      }
      current = current.next;
      count += 1;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);

    if (!prev || !prev.next) {
      return;
    }

    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();;
    const node = new Node(data, prev.next);
    prev.next = node;

    if (!node.next) {
      this.tail = node;
    }
  }
}

module.exports = { Node, LinkedList };
