function getRandom(maxNum) {
	let rand = Math.random();
	return Math.round(rand * 1000) % maxNum;
}

function shuffle() {
	let divs = document.getElementById('ordered').getElementsByTagName('div');
	let shuffled = document.getElementById('shuffled');
	
	for (let i = divs.length-1; i>=0; i--) {
		let numOfChildren = shuffled.children.length;
		let rand = getRandom(numOfChildren + 1);
		
		//insert each div at a random location
		if (rand !== numOfChildren) {
			shuffled.insertBefore(divs[i], shuffled.children[rand]);
		} else {
			shuffled.appendChild(divs[i]);
		}
	}
	
	//hide the ordered <main> and show the shuffled one
	ordered.style.display = 'none';
	shuffled.style.display = 'block';
}
