// Encapsulation: Grouping related properties and methods together in the Game class
class Game {
    constructor(game_id, game_name, game_image, game_link) {
        this.game_id = game_id;  // Encapsulating game properties
        this.game_name = game_name;
        this.game_image = game_image;
        this.game_link = game_link;
    }
    
    // Abstraction: Hides the internal details of how game information is stored, only exposes relevant information through the method
    getGameDetails() {
        return {
            name: this.game_name,
            image: this.game_image || './default-image.jpg',
            link: this.game_link
        };
    }

    // Encapsulation: This method is part of the Game class, providing the functionality to render a game card
    renderCard() {
        const details = this.getGameDetails();
        return `
            <div class="card">
                <img src="${details.image}" class="card-img-top" alt="${details.name}">
                <div class="card-body">
                    <h5 class="card-title">${details.name}</h5>
                    <a href="${details.link}" class="btn btn-primary">Click</a>
                </div>
            </div>
        `;
    }
}

// Inheritance: OutdoorGame inherits from Game and shares common properties and methods
class OutdoorGame extends Game {
    constructor(game_id, game_name, game_image, game_link) {
        super(game_id, game_name, game_image, game_link);
    }

    // Polymorphism: Override renderCard method to provide specialized implementation if needed
    renderCard() {
        const details = this.getGameDetails(); 
        return `
            <div class="card">
                <img src="${details.image}" class="card-img-top" alt="${details.name}">
                <div class="card-body">
                    <h5 class="card-title">${details.name}</h5>
                    <a href="${details.link}" class="btn btn-primary">Click</a>
                </div>
            </div>
        `;
    }
}

// Inheritance: StreetGame inherits from Game and shares common properties and methods
class StreetGame extends Game {
    constructor(game_id, game_name, game_image, game_link) {
        super(game_id, game_name, game_image, game_link);
    }

    // Polymorphism: Override renderCard method to provide specialized implementation if needed
    renderCard() {
        const details = this.getGameDetails(); 
        return `
            <div class="card">
                <img src="${details.image}" class="card-img-top" alt="${details.name}">
                <div class="card-body">
                    <h5 class="card-title">${details.name}</h5>
                    <a href="${details.link}" class="btn btn-primary">Click</a>
                </div>
            </div>
        `;
    }
}

// Function to fetch data about games and create appropriate game objects based on type
function fetchGames() {
    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            const games = data.map(gameData => {
                // Encapsulati
                return gameData.type === 'OutdoorGame' 
                    ? new OutdoorGame(gameData.game_id, gameData.game_name, gameData.game_image, gameData.game_link)
                    : new StreetGame(gameData.game_id, gameData.game_name, gameData.game_image, gameData.game_link);
            });
            renderGames(games);
        })
        .catch(error => console.error('Error fetching games:', error));
}

// Function to render the list of games in the DOM
function renderGames(games) {
    const gamesList = document.getElementById("games-list").querySelector(".row");
    gamesList.innerHTML = '';  
    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("col-12", "col-md-4", "mb-4");
        gameCard.innerHTML = game.renderCard(); 
        gamesList.appendChild(gameCard);
    });
}

// Event listener to filter games based on user input
document.getElementById("gameSearchBar").addEventListener("input", function(e) {
    const query = e.target.value.toLowerCase();
    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            const filteredGames = data.filter(game =>
                game.game_name.toLowerCase().includes(query)
            );
            const games = filteredGames.map(gameData => {
               
                return gameData.type === 'OutdoorGame' 
                    ? new OutdoorGame(gameData.game_id, gameData.game_name, gameData.game_image, gameData.game_link)
                    : new StreetGame(gameData.game_id, gameData.game_name, gameData.game_image, gameData.game_link);
            });
            renderGames(games
        })
        .catch(error => console.error('Error filtering games:', error));
});

// Initial call to fetch and render games
fetchGames();
