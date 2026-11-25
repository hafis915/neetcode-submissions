class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
     const ROW = grid.length;
  const COL = grid[0].length;

  // 1. Fail fast if start or target is blocked
  if (grid[0][0] === 1 || grid[ROW - 1][COL - 1] === 1) return -1;
  if (ROW === 1 && COL === 1) return 1; // edge case for #5

  // 3. Directions built once
  const dirs = [
    [1, 0], [1, 1], [0, 1], [-1, 1],
    [-1, 0], [-1, -1], [0, -1], [1, -1],
  ];

  // 2. Head pointer instead of shift(); each entry stores its own distance
  const queue = [[0, 0, 1]];
  let head = 0;

  // 4. Mark visited directly in grid
  grid[0][0] = 1;

  while (head < queue.length) {
    const [r, c, dist] = queue[head++];

    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;

      // 6. >= bounds and strict equality
      if (nr < 0 || nc < 0 || nr >= ROW || nc >= COL || grid[nr][nc] === 1) {
        continue;
      }

      // 5. Check the target when pushing
      if (nr === ROW - 1 && nc === COL - 1) return dist + 1;

      grid[nr][nc] = 1;
      queue.push([nr, nc, dist + 1]);
    }
  }

  return -1;
    }
}
