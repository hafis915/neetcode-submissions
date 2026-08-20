class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;

        // Refresh recency: remove and re-insert key at the end
        const val = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, val);

        return val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Remove existing key to refresh position
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        // Insert new/updated key as most recently used
        this.cache.set(key, value);

        // Evict least recently used (first element in Map) if over capacity
        if (this.cache.size > this.capacity) {
            const lruKey = this.cache.keys().next().value;
            this.cache.delete(lruKey);
        }
    }
}