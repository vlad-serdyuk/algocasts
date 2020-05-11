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
    if (!this.head) {
      return 0;
    }

    let count = 0;
    let current = this.head;

    while (current) {
      count += 1;
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
}

module.exports = { Node, LinkedList };
