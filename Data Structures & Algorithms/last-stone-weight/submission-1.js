class Solution {
      constructor() {
    this.heap = [0];
  }

  parentIndex(i) {
    return Math.floor(i/2)
  }

  leftChildIndex(i) {
    return 2 * i
  }

  rightChildIndex(i) {
    return (2 * i) + 1
  }

  
  init(nums) {
    while (!isNaN(nums[0])) {
      let item = nums.shift();
      this.push(item)
    }
  }

  smash() {
    const item1 = this.pop()
    const item2 = this.pop()
    if (item1 === item2) {
    } else {
      const newItem = Math.abs(item1-item2);
      this.push(newItem)
    }
  }

  execute() {
    console.log(this.heap, "<<< init")
    if (this.heap.length == 1) {
      return
    }

    if (this.heap.length == 2) {
        return this.heap.pop();
    }
    while (this.heap.length > 2) {
      this.smash()
    }

    if (this.heap.length > 1) {
      return this.heap[1]
    }
    return 0
  }

  pop() {
      if (this.heap.length == 1) {
      // Normally we would throw an exception if heap is empty.
          return -1;
      }
      if (this.heap.length == 2) {
          return this.heap.pop();
      }
      let res = this.heap[1];
      this.heap[1] = this.heap.pop();
      let i = 1;
      while (!isNaN(this.heap[this.leftChildIndex(i)])) {

          if (this.rightChildIndex(i) < this.heap.length) {
            let leftChild = this.heap[this.leftChildIndex(i)]
            let rightChild = this.heap[this.rightChildIndex(i)]
  
            if (leftChild > rightChild) {
                let tmp = this.heap[i] 
                this.heap[i] = leftChild;
                this.heap[this.leftChildIndex(i)] = tmp
                i = this.leftChildIndex(i)
            } else {
                let tmp = this.heap[i] 
                this.heap[i] = rightChild;
                this.heap[this.rightChildIndex(i)] = tmp
                i = this.rightChildIndex(i)
            }
          } else if (this.leftChildIndex(i) < this.heap.length) {
            let tmp = this.heap[i] 
            if (tmp < this.heap[this.leftChildIndex(i)]) {
                this.heap[i] = this.heap[this.leftChildIndex(i)];
                this.heap[this.leftChildIndex(i)] = tmp
            }
            i = this.leftChildIndex(i)
          } else {
           break
          }
      }

      return res
    }


  push(val) {
      this.heap.push(val)
      let i = this.heap.length - 1;
      while (i > 1 && this.heap[i] > this.heap[this.parentIndex(i)]) {
        let temp = this.heap[this.parentIndex(i)];
        this.heap[this.parentIndex(i)] = this.heap[i];
        this.heap[i] = temp
        i = this.parentIndex(i)
      }
  }
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        this.init(stones)
        return this.execute()
    }
}
