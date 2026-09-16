class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
const cols = grid[0].length;
let maxIsland = 0;
for (let r = 0 ; r < rows; r++ ) {
  for (let c = 0 ; c < cols; c++) {
    let count = { value : 0 };
    const area = countAreaOfIsland(grid, r,c, count);
    if (count.value > maxIsland) {
      maxIsland = count.value
    }
  }
}

function countAreaOfIsland(grid, r, c, count) {
  if (
    r < 0 ||
    c < 0 ||
    r > grid.length - 1 ||
    c > grid[0].length - 1||
    Number(grid[r][c]) === 0
  ) {
    return count
  }

  grid[r][c] = 0
  count.value++

  countAreaOfIsland(grid, r+1, c, count);
  countAreaOfIsland(grid, r-1, c, count);
  countAreaOfIsland(grid, r, c+1, count);
  countAreaOfIsland(grid, r, c-1, count);

  return count;
}

console.log(maxIsland, "<< ini max")
return maxIsland
    }
}
