function firstChar(text) {
  // your code here
	let trimChar= text.trim();
	return trimChar.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));

