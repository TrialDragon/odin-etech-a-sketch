const cubeGrid = document.createElement('div');
cubeGrid.classList.add('grid');
let cubeGridStyle = window.getComputedStyle(cubeGrid);

let currentCubeAmount = 16;

function randomColor(light)
{
	let hsl = `hsl(${Math.floor(Math.random()*360)}, ${Math.floor(Math.random()*100)}%, ${light}%`;
	return hsl;
}

function letterFilter (character)
{
	return !isNaN(character);
}

function deleteGridChildren()
{
	Array.from(cubeGrid.children).forEach(child =>
		{
			cubeGrid.removeChild(child);
		})
}

function initializeGrid(cubeAmount)
{
	deleteGridChildren();

	for(let loop = 0; loop < cubeAmount; ++loop)
	{
		for(let innerLoop = 0; innerLoop < cubeAmount; ++innerLoop)
		{
			let cubeDiv = document.createElement('div');
			cubeDiv.classList.add('cube');
			let maxWidth = Array.from(cubeGridStyle.getPropertyValue('max-width')).filter(letterFilter).join('');
			cubeDiv.style.width = maxWidth / cubeAmount; 
			let maxHeight = Array.from(cubeGridStyle.getPropertyValue('max-height')).filter(letterFilter).join('');
			cubeDiv.style.height = maxHeight / cubeAmount;
			cubeDiv.setAttribute('data-pass', 1);
			cubeDiv.addEventListener('mouseover', e =>
				{
					let targetPassThrough = e.target.getAttribute('data-pass');
					e.target.style.backgroundColor = randomColor(Math.max(0,100-(targetPassThrough * 10)));
					 e.target.setAttribute('data-pass', +targetPassThrough + (targetPassThrough < 10 ? 1 : 0));
				})
			cubeGrid.appendChild(cubeDiv);

			currentCubeAmount = cubeAmount;
		}
	}
}

const resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', e =>
	{
		let newCubeAmount = +prompt('How many cubes per side should the new grid have? 1 -- 100; 0 means do not change');
		newCubeAmount = newCubeAmount == 0 ? currentCubeAmount : Math.max(1, Math.min(100, newCubeAmount));
		initializeGrid(newCubeAmount);
	})


const body = document.querySelector('body');
body.appendChild(cubeGrid);

initializeGrid(currentCubeAmount);
