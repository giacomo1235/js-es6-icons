const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const eleContainer = document.querySelector('.cards-container')

function insertIcons (iconsArray, iconsCreationContainer) {
	iconsCreationContainer.innerHTML = '';

	iconsArray.forEach((element) => {
		const div = document.createElement('div')
		div.classList.add('card');

		div.innerHTML = `<i class="${element.prefix}solid ${element.prefix}${element.name}"  ></i> 
		<p>${element.name}</p>`;
		iconsCreationContainer.append(div);

	});
	let coloRandom = getRandomColor();
	let coloRandom1 = getRandomColor();
	let coloRandom2 = getRandomColor();
	
	if (element.type == 'user') {
		div.style.color= coloRandom

	} else if (element.type == 'vegetabe') {
		div.style.color= coloRandom1
	} else if (element.type == 'animal') {
		div.style.color= coloRandom2
	} else {
		div.style.color= element.color
	}
	
}
// style= "color: ${element.color}" 

insertIcons(arrIcons, eleContainer)
const iconsTypeSelector = document.getElementById('iconsTypeSelector');

iconsTypeSelector.addEventListener('change', function(){

	const iconsTypeSelected = this.value;
	console.log(iconsTypeSelected);
	if (iconsTypeSelected != 'all') {
		const filteredIcons = arrIcons.filter((iconArgument) => {
			if (iconArgument.type == iconsTypeSelected) {
				return true;
			}
		});
        insertIcons(filteredIcons, eleContainer);
	} else {
		insertIcons(arrIcons, eleContainer);
	}
});
 
let coloRandom = getRandomColor();
let coloRandom1 = getRandomColor();
let coloRandom2 = getRandomColor();

 function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
    
  }
  console.log(coloRandom, coloRandom1, coloRandom2)

/* function changeColor () {
    const icon = document.querySelector('i')
	if (element.type == 'user') {
		div.style.color= coloRandom

	} else if (element.type == 'vegetabe') {
		div.style.color= getRandomColor()
	} else if (element.type == 'animal') {
		div.style.color= coloRandom1
	} else {
		div.style.color= element.coloRandom2
	}
}
 */

