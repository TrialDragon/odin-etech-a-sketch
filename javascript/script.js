const cubeGrid = document.createElement('div');
cubeGrid.classList.add('grid');
const cubeGridStyle = window.getComputedStyle(cubeGrid);

const contentHeader = document.querySelector('section.content .size');

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

	contentHeader.textContent = `${cubeAmount} X ${cubeAmount}`;

	for(let loop = 0; loop < cubeAmount; ++loop)
	{
		for(let innerLoop = 0; innerLoop < cubeAmount; ++innerLoop)
		{
			const cubeDiv = document.createElement('div');
			cubeDiv.classList.add('cube');
			const maxWidth = Array.from(cubeGridStyle.getPropertyValue('max-width')).filter(letterFilter).join('');
			cubeDiv.style.width = maxWidth / cubeAmount; 
			const maxHeight = Array.from(cubeGridStyle.getPropertyValue('max-height')).filter(letterFilter).join('');
			cubeDiv.style.height = maxHeight / cubeAmount;
			cubeDiv.setAttribute('data-pass', 1);
			cubeDiv.addEventListener('mouseover', e =>
				{
					const targetPassThrough = e.target.getAttribute('data-pass');
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
		let newCubeAmount = +prompt('How many cubes per side should the new grid have? 1 -- 100; 0 means do not change', 0);
		newCubeAmount = newCubeAmount == 0 || isNan(newCubeAmount)? currentCubeAmount : Math.max(1, Math.min(100, newCubeAmount));
		initializeGrid(newCubeAmount);
	})

const content = document.querySelector('section.content .button-and-grid');
content.appendChild(cubeGrid);

initializeGrid(currentCubeAmount);
