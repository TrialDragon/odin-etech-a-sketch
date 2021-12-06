const gridContainer = document.createElement('div');
gridContainer.classList.add('grid');
for(let loop = 0; loop < 16; ++loop)
{
	for(let innerLoop = 0; innerLoop < 16; ++innerLoop)
	{
		let cubeDiv = document.createElement('div');
		cubeDiv.classList.add('cube');
		
		gridContainer.appendChild(cubeDiv);
	}
}

const body = document.querySelector('body');
body.appendChild(gridContainer);
