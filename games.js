class Game {
    constructor(game_id, game_name, game_image, game_link) {
        this.game_id = game_id;
        this.game_name = game_name;
        this.game_image = game_image;
        this.game_link = game_link;
    }

    getGameDetails() {
        return {
            name: this.game_name,
            image: this.game_image || './default-image.jpg',
            link: this.game_link
        };
    }

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

class OutdoorGame extends Game {
    constructor(game_id, game_name, game_image, game_link) {
        super(game_id, game_name, game_image, game_link);
    }

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

class StreetGame extends Game {
    constructor(game_id, game_name, game_image, game_link) {
        super(game_id, game_name, game_image, game_link);
    }

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

const games = [
    new OutdoorGame(1, "Tumbang Preso", "./picture/lata3.jpg", "./tumbangpreso.html"),
    new StreetGame(2, "Taguan", "./picture/tagu2.jpg", "./taguan.html"),
    new OutdoorGame(3, "Sipa", "./picture/sipa3.jpg", "./sipa.html"),
    new StreetGame(4, "Piko", "./picture/piko3.jpg", "./piko.html"),
    new OutdoorGame(5, "Patintero", "./picture/paten2.jpg", "./patentiro.html"),
    new StreetGame(6, "Luksong Tinik", "./picture/tinik4.jpg", "./luksongtinik.html"),
    new OutdoorGame(7, "Luksong Baka", "./picture/baak3.jpg", "./luksongbaka.html"),
    new OutdoorGame(8, "Langit Lupa", "./picture/lupa4.jpg", "./langitlupa.html"),
    new StreetGame(9, "Agawan Base", "./picture/base4.jpg", "./agawanbase.html")
];

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

document.getElementById("gameSearchBar").addEventListener("input", function(e) {
    const query = e.target.value.toLowerCase();
    const filteredGames = games.filter(game =>
        game.game_name.toLowerCase().includes(query)
    );
    renderGames(filteredGames);
});

renderGames(games);
