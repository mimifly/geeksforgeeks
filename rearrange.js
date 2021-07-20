// Rearrange array in alternating positive & negative items with O(1) extra space

array = [1,0,0,1,1,0,1,1,1,1,0,-1,-1,1,-1,0,1,-1,-1,1,-1,0,0]

function rearrange(array) {
	let j = 0;
	let sign = -1;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === 0 && i < array.length -1) {
			array[i] = array[i+1]
			array[i+1] = 0
		}
		if (i === j) {
			if (array[i] * sign > 0 ) {
				j++; 
				sign = sign * -1;
			} 			
		}
		else {
			while (array[j] * sign > 0 || array[i] * sign > 0)	{
				if (array[j] * sign > 0) {
					j++;
					sign = sign * -1;
				}
				else if (array[i] * sign > 0) {
				 	let tmp = array[j];
					array[j] = array[i];
					array[i] = tmp;
					j++;
					sign = sign * -1;
				}
			}
			
		}
		
		console.log(i, j, sign)
		console.log(array)
	}
	return array		
}

rearrange(array)
