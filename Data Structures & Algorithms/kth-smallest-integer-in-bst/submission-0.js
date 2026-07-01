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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const orderArr = [];
        this.inorder(root, orderArr);

        const finalValue = orderArr[k-1]
        return finalValue
    }

    inorder(root, arr) {
        if (root === null) {
            return
        }

        console.log(root.val, "<< ini root val")

        this.inorder(root.left, arr);
        arr.push(root.val);
        this.inorder(root.right, arr);
    }
}
