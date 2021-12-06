const cubeGrid = document.createElement('div');
cubeGrid.classList.add('grid');
let cubeGridStyle = window.getComputedStyle(cubeGrid);

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
			cubeDiv.addEventListener('mouseover', e =>
				{
					e.target.classList.add('hovered');
				})
			cubeGrid.appendChild(cubeDiv);
		}
	}
}

const resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', e =>
	{
		let newCubeAmount = +prompt('How many cubes per side should the new grid have? 1 -- 100; 0 means do not change');
		initializeGrid(newCubeAmount);
	})


const body = document.querySelector('body');
body.appendChild(cubeGrid);

initializeGrid(16);
