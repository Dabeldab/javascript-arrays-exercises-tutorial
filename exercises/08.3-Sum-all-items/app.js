function sumTheElements(theArray) {
	let total = 0;
	// Your code here
for (let i=0; i < theArray.length; i++) {
	total += theArray[i]
	
}
	return total;
}
const numbers = [2,13,34,5];
const result = sumTheElements(numbers)
console.log(result)