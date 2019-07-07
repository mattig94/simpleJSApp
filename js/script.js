//IIFE
var pokemonRepository = (function() {
	var repository = [];
	var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

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
		nameButton.addEventListener('click', function(event) {
			showDetails(pokemon);
		});
	}

	function showDetails(item) {
		pokemonRepository.loadDetails(item).then(function() {
			console.log(item);
		});
	}

	function loadList() {
		return fetch(apiUrl, { method: 'GET' })
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				json.results.forEach(function(item) {
					var pokemon = {
						name: item.name,
						detailsUrl: item.url
					};
					add(pokemon);
				});
			})
			.catch(function(e) {
				console.error(e);
			});
	}

	function loadDetails(item) {
		var url = item.detailsUrl;
		return fetch(url)
			.then(function(response) {
				return response.json();
			})
			.then(function(details) {
				// Now we add the details to the item
				item.imageUrl = details.sprites.front_default;
				item.height = details.height;
				item.types = Object.keys(details.types);
			})
			.catch(function(e) {
				console.error(e);
			});
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem,
		loadList: loadList,
		loadDetails: loadDetails
	};
})();

pokemonRepository.loadList().then(function() {
	// Now the data is loaded!
	pokemonRepository.getAll().forEach(function(pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});
