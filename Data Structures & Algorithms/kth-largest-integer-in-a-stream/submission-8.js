class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.kthLargest = k;
        this.maxSize = k + 1
        this.nums = nums;

        this.heap = [0];
        this.initiateTheHeap(nums)
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

    push(val) {
        this.heap.push(val)
        let i = this.heap.length - 1;
        while (i > 1 && this.heap[i] < this.heap[this.parentIndex(i)]) {
        let temp = this.heap[this.parentIndex(i)];
        this.heap[this.parentIndex(i)] = this.heap[i];
        this.heap[i] = temp
        i = this.parentIndex(i)
        }
    }

    pop() {
        if (this.heap.length == 1) {
        // Normally we would throw an exception if heap is empty.
            return -1;
        }
        if (this.heap.length == 2) {
            return this.heap.pop();
        }

        this.heap[1] = this.heap.pop();
        let i = 1;
        while (!isNaN(this.heap[this.leftChildIndex(i)])) {

            if (this.rightChildIndex(i) < this.heap.length) {
            let leftChild = this.heap[this.leftChildIndex(i)]
            let rightChild = this.heap[this.rightChildIndex(i)]

            if (leftChild < rightChild) {
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
            if (tmp > this.heap[this.leftChildIndex(i)]) {
                this.heap[i] = this.heap[this.leftChildIndex(i)];
                this.heap[this.leftChildIndex(i)] = tmp
            }
            i = this.leftChildIndex(i)
            } else {
             break
            }
        }


    }


    initiateTheHeap(nums) {
        while (!isNaN(nums[0])) {
        let item = nums.shift();
        this.add(item)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        console.log(this.heap, "<< ini heap before")
        console.log(this.heap.length, "<< length")
        this.push(val);

        if (this.heap.length > this.kthLargest + 1) {
            this.pop()
        }

        console.log(this.heap, "<< heap after")
        return this.heap[1]
    }
}
