class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.length = 0
        this.array = new Array(capacity).fill(0)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        console.log(this.length, "<< ini length");
        console.log(this.capacity, "<< ini capacity")
        if (this.length === this.capacity) {
            this.resize()
        }
        this.array[this.length] = n
        this.length++
    }

    /**
     * @returns {number}
     */
    popback() {
        this.length--
        return this.array[this.length]
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.capacity*2
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
