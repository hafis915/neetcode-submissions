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
     * @return {number[]}
     */
    rightSideView(root) {
        const queue = [];
        if (root === null) return [];
        if (root !== null) queue.push(root);
        const finalValue = [];
        while (queue && queue.length > 0) {
            const queueLength = queue.length
            for (let i = 0; i < queueLength; i++) {
                const currValue = queue.shift();
                if (i === queueLength -1) {
                    finalValue.push(currValue.val)
                }
                console.log(`i: ${i} Length: ${queueLength} Value: ${currValue.val}`)
                if (currValue.left !== null) {
                    queue.push(currValue.left)
                }

                if (currValue.right !== null) {
                    queue.push(currValue.right);
                }
            }
        }

        return finalValue
    }
}
