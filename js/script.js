var repository = [
	{name: 'Pelipper', height: 47, types: ['water', 'flying']},
	{name: 'Spheal', height: 31, types: ['ice', 'water']},
	{name: 'Starmie', height: 43, types: ['water', 'psychic']}
];


for (var i = 0; i < repository.length; i++) {
	document.write(repository[i].name + ' \(height\: ' + repository[i].height + '\)')
	if (repository[i].height > 45) {
		document.write(' -Wow, that\'s big!');
	}
}