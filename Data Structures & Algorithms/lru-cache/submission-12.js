/**
 * Doubly Linked List Node: Stores the key-value pair.
 * The 'prev' and 'next' pointers are essential for O(1) removals
 * because they allow the node to "disconnect" itself from the list.
 */
class Node {
    constructor(key = 0, val = 0) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;

        // "key" : "Node Object" 
        this.cache = new Map(); // Maps key -> Node object for O(1) access

        /**
         * Dummy "Sentinel" Nodes: 
         * These stay at the ends of the list and never store actual data.
         * left.next always points to the Least Recently Used (LRU) node.
         * right.prev always points to the Most Recently Used (MRU) node.
         */
        this.left = new Node();
        this.right = new Node();
        
        // Connect the dummy nodes initially
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);
        
        // "Refresh" the node: remove it from its current position
        // and move it to the right-most (MRU) position.
        this.remove(node);
        this.insert(node);
        
        return node.val;
        
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            // If key exists, find the existing node and update its value
            const node = this.cache.get(key);
            node.val = value;
            
            // Still need to refresh its position to MRU
            this.remove(node);
            this.insert(node);

            return;
        } 
        // If it's a new key, create a new Node
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        // If we go over capacity, we must evict the Least Recently Used node
        if (this.cache.size > this.cap) {
            // The LRU node is always immediately after the 'left' dummy node
            let lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key); // Don't forget to delete from the Map!
        }
    }

    /**
     * Helper: Always adds a node just before the 'right' dummy node.
     * This marks the node as the Most Recently Used.
     */
    insert(node) {
        let prevNode = this.right.prev; 
        
        // Adjust pointers to sandwich 'node' between 'prevNode' and 'right'
        prevNode.next = node;
        node.prev = prevNode;
        node.next = this.right;
        this.right.prev = node;
    }

    /**
     * Helper: Removes a node by connecting its neighbors to each other.
     * This effectively "skips" the current node in the chain.
     */
    remove(node) {
        let prev = node.prev; 
        let nextNode = node.next;
        
        // Directly connect the node's previous neighbor to its next neighbor
        prev.next = nextNode;
        nextNode.prev = prev;
    }
}