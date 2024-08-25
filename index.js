function diagonalSum(matrix) {
  let matrixSize = matrix.length

  let sum = 0
  for (let i = 0; i < matrixSize; i++) {
    sum += matrix[i][i]

    if (i !== matrixSize - 1 - i) {
      sum += matrix[i][matrixSize - 1 - i]
    }

    console.log(`Loop ${i}, sum : ${sum}`)
  }

  return sum
}

const matrixTestCase1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const matrixTestCase2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

console.log('matrixTestCase1 : ', diagonalSum(matrixTestCase1))
console.log('\n')
console.log('matrixTestCase2 : ', diagonalSum(matrixTestCase2))
