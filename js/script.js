var repository = [
	{name: 'Pelipper', height: 47, types: ['water', 'flying']},
	{name: 'Spheal', height: 31, types: ['ice', 'water']},
	{name: 'Starmie', height: 43, types: ['water', 'psychic']}
];


// for (var i = 0; i < repository.length; i++) {
// 	var name = repository[i].name;
// 	var height = repository[i].height;
// 	document.write('<p>' + name + ' \(height\: ' + height + '\)')
// 	if (height > 45) {
// 		document.write(' -Wow, that\'s big!</p>');
// 	} else {
// 		document.write('</p>');
// 	}
// };

repository.forEach(function(pokemon){
	document.write('<p>' + pokemon.name + ' \(height\: ' + pokemon.height + '\)')
	if (pokemon.height > 45) {
		document.write(' -Wow, that\'s big!</p>');
	} else {
		document.write('</p>');
	}
});