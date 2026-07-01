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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
 if (!preorder.length || !inorder.length) {
            return null;
        }

        // 1. root is first element of preorder
        const rootVal = preorder[0];
        const root = new TreeNode(rootVal);

        // 2. find root in inorder
        const rootIndex = inorder.indexOf(rootVal);

        // 3. split inorder
        const leftInorder = inorder.slice(0, rootIndex);
        const rightInorder = inorder.slice(rootIndex + 1);

        // 4. split preorder based on inorder size
        const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
        const rightPreorder = preorder.slice(1 + leftInorder.length);

        // 5. recursion
        root.left = this.buildTree(leftPreorder, leftInorder);
        root.right = this.buildTree(rightPreorder, rightInorder);

        return root;
    }




}
