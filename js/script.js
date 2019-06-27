var repository = [
	{name: 'Pelipper', height: 47, types: ['water', 'flying']},
	{name: 'Spheal', height: 31, types: ['ice', 'water']},
	{name: 'Starmie', height: 43, types: ['water', 'psychic']}
];


for (var i = 0; i < repository.length; i++) {
	var name = repository[i].name;
	var height = repository[i].height;
	document.write(name + ' \(height\: ' + height + '\)')
	if (height > 45) {
		document.write(' -Wow, that\'s big!<br>');
	} else {
		document.write('<br>')
	}
}