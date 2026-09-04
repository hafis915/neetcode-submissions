class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
// only change the color that has same value with the start point
        // check only if the neighbour has same value with the starting point
        // Base condition
        // dont revisit
        // dont out of bound
        // dont change if the value != original value
        // dont trace back
        // stop when all the recursive allready go to all direction relative to starting point

        const _initialValue = image[sr][sc];
        function recursively(image,sr,sc,color,initialValue, visit) {

            const row = image.length;
            const column = image[0].length;

            const isHasNegative  = Math.min(sr,sc) < 0;
            
            if (isHasNegative || sr === row || sc === column || image[sr][sc] !== initialValue || visit.get(`${sr}${sc}`) === 1) {
                return
            }

            image[sr][sc] = color;
            visit.set(`${sr}${sc}`, 1)

            recursively(image, sr + 1, sc, color, initialValue, visit);
            recursively(image, sr - 1 , sc,color, initialValue, visit);
            recursively(image, sr , sc + 1,color, initialValue, visit);
            recursively(image, sr , sc - 1,color, initialValue, visit);
            return
        }

        recursively(image,sr,sc,color,_initialValue, new Map())
        return image
    }
}
