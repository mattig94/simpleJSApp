//IIFE
var pokemonRepository = (function() {
	var repository = [
		{ name: 'Pelipper', height: 47, types: ['water', 'flying'] },
		{ name: 'Spheal', height: 31, types: ['ice', 'water'] },
		{ name: 'Starmie', height: 43, types: ['water', 'psychic'] }
	];

	function getAll() {
		return repository;
	}

	function add(pokemon) {
		repository.push(pokemon);
	}

	function addListItem(pokemon) {
		var $pokemonList = document.querySelector('.pokemon-list');
		var listItem = document.createElement('li');
		var nameButton = document.createElement('button');
		nameButton.innerText = pokemon.name;
		nameButton.classList.add('main-pokemon-button');
		listItem.appendChild(nameButton);
		$pokemonList.appendChild(listItem);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};
})();

pokemonRepository.getAll().forEach(function(pokemon) {
	pokemonRepository.addListItem(pokemon);
});
