array = [1,2,3,1,2,3,5]

function largestThree(array) {
  // One way to set up the values so the comparisons aren't undefined
  // and will always initialise the input values on first loops
  let a = Number.NEGATIVE_INFINITY;
  let b = Number.NEGATIVE_INFINITY;
  let c = Number.NEGATIVE_INFINITY;

  for (let e of array) {
    if (e > a) {
      c = b; b = a; a = e;
    } 

    else if (e > b && e !== a)  { // !== because require distinct elements
      c = b; b = e;
    }

    else if (e > c && e !== b && e !== a) {
      c = e
    }
  }
  return [a, b, c]
}

largestThree(array)
