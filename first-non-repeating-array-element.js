const array = [1,2,3,4,1,1,1,3,3,2] // test array

function firstNonRepeat(array) {
  let j = 0; // keeps track of the index for the current element that we haven't found a repeat for
  let tally = {} // object to keep track of the tally for each element as we loop through array
  
  // necessary to loop through every element in case of edge case scenarios where an element will repeat on the last index
  for (let a of array) {
    if (tally[a]) { 
      tally[a]++;
      while(tally[array[j]] > 1) j++
    }
    else {
       tally[a] = 1
    }   
  }
  return array[j]
}

firstNonRepeat(array) // 4
