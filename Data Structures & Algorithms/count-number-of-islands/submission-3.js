class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
const COLS = grid[0].length;
const connection = new Map()
const visit = new Map()

function isIsland({
  grid,
  ROWS,
  COLS,
  r,
  c,
  visit,
  connection
}) {
  const isOutofBound = Math.min(r, c) < 0 || r === ROWS || c === COLS
  const isVisited = visit.get(`${r},${c}`) === 1
  // Mentok gk bisa jalan

  if (isOutofBound || isVisited || Number(grid[r][c]) === 0) {
    return 0
  }

  // Akan selalu ada pulau walaupun gk ada koneksi. 
  visit.set(`${r},${c}`, 1)
  connection.set(`${r},${c}`, 1)


  isIsland({ grid, ROWS, COLS, r: r + 1, c, visit, connection });
  isIsland({ grid, ROWS, COLS, r: r, c: c + 1, visit, connection });
  isIsland({ grid, ROWS, COLS, r: r - 1, c, visit, connection });
  isIsland({ grid, ROWS, COLS, r: r, c: c - 1, visit, connection });

//   visit.delete(`${r}${c}`)
  return 1
}


let totalIsland = 0
for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
    const isConnected = connection.get(`${r},${c}`) === 1
    if (Number(grid[r][c]) === 1 && !isConnected) {
      const countIsland = isIsland({
        grid,
        ROWS,
        COLS,
        r,
        c,
        visit,
        connection
      })

      totalIsland++
    }

  }
}
console.log(totalIsland, "<< ini totalisland")
return totalIsland
    }
}
