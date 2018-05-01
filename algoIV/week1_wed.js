//*  ===== floodFill(num) ================================ *//
let w = null;
let len = null;
let rowAfter = null;
let rowBefore = null;
let originaXY = null;
let adjacentBefore = true;
let adjacentAfter = true;
let half = null;
let jobIsDone = false;

function floodFill(canvas2D, startXY, newColor) {

    if (!half) {

        if (!w) {
            if (!len) { len = canvas2D.length; }
            w = canvas2D[startXY[0]][startXY[1]];
            if (!rowAfter) { rowAfter = startXY[0]; }
            if (!rowBefore) { rowBefore = startXY[1]; }
            originalXY = startXY;
        }

        if ( canvas2D[startXY[0]][rowBefore] === w ) {
            canvas2D[startXY[0]][rowBefore] = newColor;
        } else {
            adjacentBefore = false;
        }

        while (adjacentBefore) {
            // Replace same row;
            rowBefore--;
            if (rowBefore >=0) {
                floodFill(canvas2D, [(startXY[0]),(startXY[1])], newColor);
            }   
        }
        rowAfter++;
        if ( canvas2D[startXY[0]][rowAfter] === w ) {
            canvas2D[startXY[0]][rowAfter] = newColor;
        } else {
            adjacentAfter = false;
        }
        while (adjacentAfter) {
    
            if (rowAfter < len && rowAfter >= startXY[1]) {
                floodFill(canvas2D, [(startXY[0]),(startXY[1])], newColor);
            }
        }

        startXY[0]--;
        if (startXY[0] >= 0) {
            adjacentAfter = true;
            adjacentBefore = true;
            rowAfter = startXY[0];
            rowBefore = startXY[1];
        }

        if (startXY[0] >= 0) {
            floodFill(canvas2D, [(startXY[0]),(startXY[1])], newColor);
        } else {
            startXY = originalXY
            half = true;
            if (!rowAfter) { rowAfter = startXY[0]; }
            if (!rowBefore) { rowBefore = startXY[1]; }
        }

    } 
    ///  meddle 

    if ( canvas2D[startXY[0]][rowBefore] === w ) {
        canvas2D[startXY[0]][rowBefore] = newColor;
    } else {
        adjacentBefore = false;
    }

    while (adjacentBefore) {
        // Replace same row;
        rowBefore--;
        if (rowBefore >=0) {
            floodFill(canvas2D, [(startXY[0]),(startXY[1])], newColor);
        }   
    }

    if ( canvas2D[startXY[0]][rowAfter] === w ) {
        canvas2D[startXY[0]][rowAfter] = newColor;
    } else {
        adjacentAfter = false;
    }

    rowAfter++;
    while (adjacentAfter) {

        if (rowAfter < len) {
            floodFill(canvas2D, [(startXY[0]),(startXY[1])], newColor);
        } else {
            adjacentAfter = false;
            jobIsDone = true;
        }
    }

    if (!jobIsDone) {
        adjacentAfter = true;
        adjacentBefore = true;
        rowAfter = startXY[0];
        rowBefore = startXY[1];
        startXY[0]++;
        if (startXY[0] < len) {
            floodFill(canvas2D, [(startXY[0]),(startXY[1])], newColor);
        }
    }

    return canvas2D;
    
}
var flood = floodFill(
      [ [3,2,3,4,3],
        [2,3,3,4,0],
        [7,3,3,4,1],
        [6,5,3,4,1],
        [1,2,3,3,3] ], [ 2,2 ], 1 );
console.log(flood[0]);
console.log(flood[1]);
console.log(flood[2]);
console.log(flood[3]);
console.log(flood[4]);
