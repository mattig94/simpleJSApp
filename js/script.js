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
		nameButton.addEventListener('click', function() {
			showDetails(pokemon);
		});
	}

	function showDetails(item) {
		pokemonRepository.loadDetails(item).then(function() {
			createDetails(item);
		});
	}

	//create modal
	function createDetails(item) {
		//variables
		var $modalContainer = document.querySelector('#modal-container');
		var modal = document.createElement('div');
		var closeButton = document.createElement('button');
		var imgElement = document.createElement('img');
		var nameTitle = document.createElement('h2');
		var heightElement = document.createElement('p');
		var weightElement = document.createElement('p');

		//clear contents
		$modalContainer.innerHTML = '';

		//create contents
		modal.classList.add('modal');
		closeButton.classList.add('modal-close');
		closeButton.innerText = 'close';
			//click event to hide modal
			closeButton.addEventListener('click', hideModal);
		imgElement.setAttribute('src', item.imageUrl);
		imgElement.setAttribute('alt', 'Picture of ' + item.name);
		nameTitle.innerText = item.name;
		heightElement.innerText = 'Height: ' + item.height/10 + ' meters';
		weightElement.innerText = 'Weight: ' + item.weight/10 + ' kilograms';

		//add contents
		modal.appendChild(closeButton);
		modal.appendChild(imgElement);
		modal.appendChild(nameTitle);
		modal.appendChild(heightElement);
		modal.appendChild(weightElement);
		$modalContainer.appendChild(modal);

		$modalContainer.classList.add('is-visible');
	}

	//basic function to hide modal
	function hideModal() {
		document.querySelector('#modal-container').classList.remove('is-visible');
	}

	//hide modal on keypress
	window.addEventListener('keydown', (e) => {
		if(e.key === 'Escape' && document.querySelector('#modal-container').classList.contains('is-visible')) {
			hideModal();
		}
	});

	//hide modal by clicking outside container
	document.querySelector('#modal-container').addEventListener('click', (e) => {
		var target = e.target;
		if (target === document.querySelector('#modal-container')) {
			hideModal();
		}
	});

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
				item.weight = details.weight;
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
