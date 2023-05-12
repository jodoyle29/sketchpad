let div = document.querySelector('.container');

for(let i = 0; i < 16; ++i){

		let row = document.createElement('div');
		row.className = 'row';

		for(let j = 1; j <= 16; ++j){

			let cell = document.createElement('div');
			cell.className = 'cell';
			cell.id = (i * 16) + j;
			cell.innerText = (i * 16) + j;

			row.appendChild(cell);
		}

		div.appendChild(row);
	}

/* 
function generateCells(num){

	for(let i = 0; i < num; ++i){

		let row = createElement('div');
		row.className = 'row';

		for(let j = 1; j <= num; ++j){

			let cell = createElement('div');
			cell.className = 'cell';
			cell.id = (i * num) + j;

			row.appendChild(cell);
		}

		div.appendChild(row);
	}
} 
*/