class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        for (let row=0; row<grid.length; row++){
            for (let col=0; col<grid[0].length; col++){
                if (grid[row][col] === "1"){
                    count++;
                    this.dfs(grid, row, col);
                }
            }
        }
        return count;
    }

    dfs(grid, row, col){
        if (
            row > grid.length-1 ||
            row < 0 ||
            col > grid[0].length-1 ||
            col < 0 ||
            grid[row][col] === "0"
        ) {
            return;
        }
        grid[row][col] = "0";
        this.dfs(grid, row+1, col);
        this.dfs(grid, row-1, col);
        this.dfs(grid, row, col+1);
        this.dfs(grid, row, col-1);
    }
}
