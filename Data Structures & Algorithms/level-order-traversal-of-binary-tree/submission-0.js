/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const queue = []
        if (root === null) return [];
        if (root !== null) queue.push(root);
        let finalValue = []
        let level = 0;
        while (queue.length > 0) {
            const queueLength = queue.length;
            let temp = []
            for (let i = 0; i < queueLength; i++) {
                const currentValue = queue.shift();
                temp.push(currentValue.val)
                console.log(`Level ${level}`,currentValue.val, "<<<");

                if (currentValue.left !== null) {
                    queue.push(currentValue.left)
                } 
                if (currentValue.right !== null) {
                    queue.push(currentValue.right)
                }

            }
            level++
            finalValue.push(temp)
        }

        return finalValue

    }
}
