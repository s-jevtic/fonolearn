export function sliceMatrix(matrix: any[][], width: number) {
  let slices = [];
  for(let i = 0; i <= matrix.length; i += width) {
    let slice = []; 
    for(const row of matrix) {
      slice.push(row.slice(i, i + width));
    }
    slices.push(slice);
  }
  return slices;
}
