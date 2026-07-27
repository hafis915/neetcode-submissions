class Solution {
constructor() {
    this.heap = [0]
  }

  getParentIndex(i) {
    return Math.floor(i / 2)
  }

  getLeftChild(i) {
    return i * 2
  }

  getRightChild(i) {
    return i * 2 + 1
  }

  getHeapLength() {
    return this.heap.length
  }

  getKeyValue(i) {
    const value = this.heap[i][0]
    return value
  }

  push(obj) {
    this.heap.push(obj);
    let i = this.getHeapLength() - 1
    while (i > 1 && this.getKeyValue(i) > this.getKeyValue(this.getParentIndex(i))) {
      let tmp = this.heap[i]
      this.heap[i] = this.heap[this.getParentIndex(i)]
      this.heap[this.getParentIndex(i)] = tmp
      i = this.getParentIndex(i)
    }
  }

  pop() {
    if (this.getHeapLength() === 1) {
      return -1
    }

    let popItem;
    if (this.getHeapLength() === 2) {
      popItem = this.heap.pop()
      return popItem
    }

    popItem = this.heap[1]
    this.heap[1] = this.heap[this.getHeapLength() - 1];
    this.heap.pop()

    let i = 1;
    while (this.getLeftChild(i) < this.getHeapLength()) {
      if (this.getRightChild(i) < this.getHeapLength()) {
        // const leftChild = this.heap[this.getLeftChild(i)];
        // const rightChild = this.heap[this.getRightChild(i)];
        const leftChild = this.getKeyValue(this.getLeftChild(i))
        const rightChild = this.getKeyValue(this.getRightChild(i))
        const current = this.getKeyValue(i)

        if (leftChild <= current && rightChild <= current) break
        if ((leftChild > rightChild)) {
          
          let tmp = this.heap[i];
          
          this.heap[i] = this.heap[this.getLeftChild(i)];
          this.heap[this.getLeftChild(i)] = tmp
          i = this.getLeftChild(i);
        } else  {
          let tmp = this.heap[i];
          this.heap[i] = this.heap[this.getRightChild(i)];
          this.heap[this.getRightChild(i)] = tmp
          i = this.getRightChild(i);
        }
      } else if (this.getKeyValue(this.getLeftChild(i)) > this.getKeyValue(i)) {
        let tmp = this.heap[i];
        this.heap[i] = this.heap[this.getLeftChild(i)];
        this.heap[this.getLeftChild(i)] = tmp

        i = this.getLeftChild(i)
      } else {
        break
      }
    }

    return popItem
  }

  getDistance(point1, point2) {
    const x1 = point1[0]
    const y1 = point1[1]

    const x2 = point2[0]
    const y2 = point2[1]
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  }

  init(arr) {
    for (const item of arr) {
      this.push(item)
    }
    return this.heap

  }

  /**
   * @param {number[][]} points
   * @param {number} k
   * @return {number[][]}
   */
  kClosest(points, k) {
    const result = []
    for (const point of points) {
      // let distance = this.getDistance([0, 0], point).toFixed(1)
      let distance = point[0]**2 + point[1]**2
      this.push( [distance, point])

      if (this.getHeapLength() > k + 1) {
        this.pop()
      }
    }

    for (let i = 1 ; i <= k; i++) {
      const value = this.heap[i][1]
      result.push(value)
    }

    return result
  }
}
