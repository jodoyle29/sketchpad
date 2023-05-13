
let div = document.querySelector('.container');
 
function generateCells(num){
	width  = Math.floor(960 / num);
	height = Math.floor(960 / num);

	for(let i = 0; i < num; ++i){

		let row = document.createElement('div');
		row.className = 'row';

		for(let j = 1; j <= num; ++j){

			let cell = document.createElement('div');
			cell.className = 'cell';
			cell.id = (i * num) + j;
			cell.setAttribute('style', `width: ${width}px; 
										height: ${height}px;`);

			row.appendChild(cell);
		}

		div.appendChild(row);
	}
} 

let button = document.querySelector('button');

button.addEventListener('click', function(e){
	let gridSize = prompt("Please enter a number ( < 100)", "16");

	if(gridSize != null && gridSize >= 100){
		document.getElementById('message').innerText = 
		"The number you have entered (" + gridSize + ") is too large";
	}

	if(gridSize != null && gridSize < 0 ){
		document.getElementById('message').innerText = 
		"Cannot greate a grid of negative size";
	}

	if(gridSize != null && gridSize < 100){
		generateCells(gridSize);
	}

	[...document.querySelectorAll('.cell')].forEach(function (item){
	item.addEventListener('mouseenter', function(e){
		let cell = document.getElementById(e.target.getAttribute('id'));
		cell.classList.add('newColor');
		console.log(`Changed the background color of cell # ${e.target.getAttribute('id')}`);

		});
	});
});



