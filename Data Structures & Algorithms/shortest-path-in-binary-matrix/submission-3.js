class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
                // Find the length of COL and ROW
        // Create a new Matrix to record the visited coordinat
      // Create variable to save a queue
      // start with 0,0 add the start point to queue
      // if grid[0][0] is = 1 then return -1
      // loop the start point
      // shift the queue
      // get the col 0 and row 0 as the start point
      // find the neighbour of the start point on 8 direction
      // if the value of the grid is < 0, > col or > row, the value of the neighbour is 1 and have visited then continue to another neigbour
      // push the valid neighbour to queue. for example [1,1]
      
            console.log("--- start ---")
      const ROW = grid.length;
      const COL = grid[0].length;
      let visit = new Array(ROW).fill(0).map(() => Array(COL).fill(0));
      let queue = new Array();

      queue.push([0,0]);
      if (grid[0][0] === 1 ) return -1;
      visit[0][0] = 1
      let length = 1;
      while (queue.length > 0) {
         let queueLength = queue.length;
         console.log(queue, queue.length)
         for (let i = 0 ; i < queueLength ; i++) {
           const pair = queue.shift();

           console.log(queue, "<<< after shift")
           let r = pair[0] ;
           let c = pair [1];

           console.log(r,c, "<<< INI R,C")

           if (r === ROW -1 && c == COL -1) {
            console.log("=== here ===")
            console.log(length, "<< ini length")
            return length;
           }

           let neighbours = [
            [r+1, c],
            [r+1, c+1],
            [r, c+1],
            [r-1, c+1],
            [r-1, c],
            [r-1, c-1],
            [r, c-1],
            [r+1, c-1]
           ]
           for (let j = 0; j< 8 ; j++) {
            let newR = neighbours[j][0];
            let newC = neighbours[j][1];

            if (Math.min(newR, newC) < 0 || newR == ROW || newC == COL || visit[newR][newC] == 1|| grid[newR][newC] == 1) {
                console.log(newR, newC, "<< SKIP");
                continue;
            }

            queue.push(neighbours[j]);
            console.log("-------------------")
            console.log(newR, newC, )
            visit[newR][newC] = 1
            
        }
        // length++
         }
         console.log(queue, "<< queueu")
         length++
         console.log("--- diluar loop queue ---")
      }

      console.log(length, "<< ini length")
      console.log(visit, "<< ini visit")
      if (visit[ROW-1][COL-1] !== 1) {
        return -1
      }
      return length
    }
}
