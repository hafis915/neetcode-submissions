class TreeNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.left = null
        this.right = null
        this.parent = null           // fix 1
    }
}

class TreeMap {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(key, val) {
        const newTreeNode = new TreeNode(key, val)
        if (!this.root) {
            this.root = newTreeNode;
            this.size++
            return
        }

        let current = this.root
        while (true) {
            if (key === current.key) {
                current.value = val;
                return                // fix 2: stop here
            }
            if (key < current.key) {
                if (!current.left) {
                    current.left = newTreeNode;
                    current.left.parent = current;
                    this.size++       // fix 2: increment size
                    return
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newTreeNode;
                    current.right.parent = current;
                    this.size++       // fix 2: increment size
                    return
                }
                current = current.right;
            }
        }
    }

    get(key) {
        let curr = this.root;

        while (curr) {                // fix 3: safe loop
            if (key === curr.key) {
                return curr.value     // fix 3: .value not .val
            } else if (key < curr.key) {
                curr = curr.left;
            } else {
                curr = curr.right;    // fix 3: curr not current
            }
        }

        return -1
    }

    getMin() {
        let curr = this.root;
        if (!curr) return -1;         // fix 4

        while (curr && curr.left) {
            curr = curr.left
        }
        return curr.value
    }

    getMax() {
        let curr = this.root;
        if (!curr) return -1;         // fix 4

        while (curr && curr.right) {
            curr = curr.right
        }
        return curr.value
    }

    remove(key) {
        function minValue(root) {
            let curr = root;
            while (curr != null && curr.left != null) {
                curr = curr.left;
            }
            return curr;
        }

        function removeKey(root, val) {
            if (root === null) return null;

            if (val > root.key) {
                root.right = removeKey(root.right, val)
            } else if (val < root.key) {
                root.left = removeKey(root.left, val);
            } else {
                if (root.left == null) {
                    return root.right
                } else if (root.right === null) {
                    return root.left
                } else {
                    let minNode = minValue(root.right);        // fix 5
                    root.key = minNode.key;
                    root.value = minNode.value;
                    root.right = removeKey(root.right, minNode.key); // fix 5
                }
            }
            return root;
        }

        this.root = removeKey(this.root, key)  // fix 5: update root
        this.size--
    }

    getInorderKeys() {
        const arr = []
        function inorder(root) {
            if (root === null) return;
            inorder(root.left)
            arr.push(root.key)
            inorder(root.right)
        }

        inorder(this.root)
        return arr              // fix 6
    }
}