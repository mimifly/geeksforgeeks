const array = [1,2,3,4,1,1,1,3,3,2] //test array

function firstNonRepeat(array) {
  let j = 0;
  let tally = {}
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

firstNonRepeat(array)
