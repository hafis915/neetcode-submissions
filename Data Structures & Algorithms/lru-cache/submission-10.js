class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null
    this.next = null;
  }
}

class LinkedList {
  constructor(key, value) {
    const node = new Node(key, value)
    this.head = node
    this.tail = node
    this.size = 1
  }

  find(key) {
    let curr = this.head
    while (curr) {
      if (curr.key === key) {
        return curr
      }
      curr = curr.next
    }
  }

  add(key, value) {
    const newNode = new Node(key, value)
    newNode.prev = this.tail
    if (this.head === null) {
      this.head = newNode
    }

    if (this.tail === null) {
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  removeHead() {
    if (this.head.next) {
      this.head = this.head.next
      this.head.prev = null
    } else {
      this.tail = null
      this.head = null
    }
    this.size--
  }

  mapView() {
    let curr = this.head
    let hashMap = {}
    while (curr) {
      hashMap[curr.key] = curr.value
      curr = curr.next
    }

    return hashMap
  }

  remove(node) {
    if (node.prev) node.prev.next = node.next
    else this.head = node.next

    if (node.next) node.next.prev = node.prev
    else this.tail = node.prev

    this.size--
  }

  moveToTail(node) {
    this.remove(node)
    node.prev = this.tail
    node.next = null
    if (this.tail) this.tail.next = node
    this.tail = node
    if (!this.head) this.head = node
    this.size++
  }
}


class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.linkedList = null
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.linkedList) return -1
    const value = this.linkedList.find(key)
    if (value) {
      this.linkedList.moveToTail(value)
      return value.value
    }
    return -1
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (!this.linkedList) {
      this.linkedList = new LinkedList(key, value)
    } else {
      const isExist = this.linkedList.find(key)
      if (isExist) {
        isExist.value = value
        this.linkedList.moveToTail(isExist)

        return
      }
      if (this.linkedList.size >= this.capacity) {
        this.linkedList.removeHead()
      }
      this.linkedList.add(key, value)
    }

  }
}