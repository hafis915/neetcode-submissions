class Solution {
  constructor() {
    this.heap = [null]
  }


  getParentIndex(i) {
    return Math.floor(i/2)
  }

  getLeftChildIndex(i) {
    return 2*i
  }

  getRightChildIndex(i) {
    return 2*i + 1
  }

  getHeap() {
    return this.heap
  }
  push(val) {
    this.heap.push(val);
    if (this.heap.length <= 2) {
      return
    }
    let i = this.heap.length - 1
    while (i > 1 && this.heap[i] < this.heap[this.getParentIndex(i)]) {
      let item = this.heap[i]
      this.heap[i] = this.heap[this.getParentIndex(i)] 
      this.heap[this.getParentIndex(i)] = item
      i = this.getParentIndex(i)
    }
  }

  pop() {

    if (this.heap.length === 1) {
      return -1
    }
    if (this.heap.length === 2) {
      return this.heap.pop()
    }


    // swap the last item with the [1] item
    // porcalate down the first item until the node dont have child
    // while the node has left child 
    // if it has right child it means has two child
    // if node is bigger than the left and right child 
      // stop
      // else if left child is bigger then right child 
        // swap node with left child
      // else 
        // swap the node with rigjt child
    // else if the node has left child and left child is bigger then node
      // swap node with left child
    // else break

    let value = this.heap.pop()
    this.heap[1] = value

    let i = 1;
    while (this.getLeftChildIndex(i) < this.heap.length) {
      if (this.getRightChildIndex(i) < this.heap.length) {
        let tmp = this.heap[i]
        let left = this.heap[this.getLeftChildIndex(i)]
        let right = this.heap[this.getRightChildIndex(i)]
        if (tmp <= left && tmp <= right) break
        if (left < right) {
          this.heap[this.getLeftChildIndex(i)] = tmp
          this.heap[i] = left
          i = this.getLeftChildIndex(i)
        } else {
          this.heap[this.getRightChildIndex(i)] = tmp
          this.heap[i] = right
          i = this.getRightChildIndex(i)
        }
      } else if (this.heap[this.getLeftChildIndex(i)] < this.heap[i]) {
        let tmp = this.heap[i]
        this.heap[i] = this.heap[this.getLeftChildIndex(i)]
        this.heap[this.getLeftChildIndex(i)] = tmp
        i = this.getLeftChildIndex(i)
      } else {
        break
      }
    }
    

    
    
  }

  findKthLargest(nums, k) {
    for (const item of nums) {
      this.push(item)
      if (this.heap.length > k+1) {
        this.pop()
      }
    }

    return this.heap[1]
  }
}