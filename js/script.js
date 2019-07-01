var pokemonRepository = (function () {
	var repository = [
		{name: 'Pelipper', height: 47, types: ['water', 'flying']},
		{name: 'Spheal', height: 31, types: ['ice', 'water']},
		{name: 'Starmie', height: 43, types: ['water', 'psychic']}
	];

	function getAll(){
		return repository;
	}

	function add(pokemon) {
		repository.push(pokemon);
	}

	return {
		add: add,
		getAll: getAll
	}


}) ();

pokemonRepository.getAll().forEach(function(pokemon){
	document.write('<p>' + pokemon.name + ' \(height\: ' + pokemon.height + '\)')
	if (pokemon.height > 45) {
		document.write(' -Wow, that\'s big!</p>');
	} else {
		document.write('</p>');
	}
});