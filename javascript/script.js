const gridContainer = document.createElement('div');
gridContainer.classList.add('grid');
for(let loop = 0; loop < 16; ++loop)
{
	for(let innerLoop = 0; innerLoop < 16; ++innerLoop)
	{
		let cubeDiv = document.createElement('div');
		cubeDiv.classList.add('cube');
		cubeDiv.addEventListener('mouseover', e =>
			{
				e.target.classList.add('hovered');
			})
		gridContainer.appendChild(cubeDiv);
	}
}

const resetButton = document.querySelector('button.reset');
resetButton.addEventListener('click', e =>
	{
		let cubes = gridContainer.children;
		for(let loop = 0; loop < cubes.length; ++loop)
		{
			cubes[loop].classList.remove('hovered');
		}
	})

const body = document.querySelector('body');
body.appendChild(gridContainer);
