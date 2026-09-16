class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let max = 0;

        let dfs = (i, j, arr) => {
            if(i < 0 || j < 0 || i >= arr.length || j >= arr[i].length) {
                return 0;
            }
            if(arr[i][j] === 0){
                return 0;
            }
            arr[i][j] = 0;
            return 1 + dfs(i + 1, j, arr) + dfs(i, j + 1, arr) + dfs(i - 1, j, arr) + dfs(i, j - 1, arr)
        }

        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[i].length; j++){
                if(grid[i][j] === 0) {
                    continue;
                }
                let sum = dfs(i, j, grid)
                max = Math.max(sum, max)
            }
        }
        return max;
    }
}
