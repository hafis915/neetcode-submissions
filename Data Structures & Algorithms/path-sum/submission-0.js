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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        return this.getTotal(root, targetSum, [])
    }

    getSumOfArray(array = []) {
        let sum = 0
        for (let i = 0 ; i < array.length ; i++) {
            sum += array[i]
        }
        return sum
    }

    getTotal(root, targetSum, path) {
        if (!root) return false
        path.push(root.val)
        const totalSum = this.getSumOfArray(path)
        console.log(path, "<< ini path", totalSum)
        // console.log(totalSum , "<< ini tital sum")
        if (root.left === null && root.right === null && totalSum === targetSum ) {
            return true;
        }

        if (this.getTotal(root.left, targetSum, path)) {
            return true;
        }
        
        if (this.getTotal(root.right,targetSum, path)) {
            return true;
        }

        path.pop();

        return false;
    }
}
