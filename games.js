class Game {
    constructor(game_id, game_name, game_description, game_image, game_link) {
        this.game_id = game_id;
        this.game_name = game_name;
        this.game_description = game_description;
        this.game_image = game_image;
        this.game_link = game_link;
    }

    getGameDetails() {
        return {
            name: this.game_name,
            description: this.game_description,
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
                    <p class="card-text">${details.description}</p>
                    <a href="${details.link}" class="btn btn-primary">Click</a>
                </div>
            </div>
        `;
    }

}

class OutdoorGame extends Game {
    constructor(game_id, game_name, game_description, game_image, game_link, difficulty_level) {
        super(game_id, game_name, game_description, game_image, game_link);
        this.difficulty_level = difficulty_level; 
    }

    renderCard() {
        const details = this.getGameDetails();
        return `
            <div class="card">
                <img src="${details.image}" class="card-img-top" alt="${details.name}">
                <div class="card-body">
                    <h5 class="card-title">${details.name} - Difficulty: ${this.difficulty_level}</h5>
                    <p class="card-text">${details.description}</p>
                    <a href="${details.link}" class="btn btn-primary">Click</a>
                </div>
            </div>
        `;
    }
}

class StreetGame extends Game {
    constructor(game_id, game_name, game_description, game_image, game_link, team_size) {
        super(game_id, game_name, game_description, game_image, game_link);
        this.team_size = team_size; 
    }

    renderCard() {
        const details = this.getGameDetails();
        return `
            <div class="card">
                <img src="${details.image}" class="card-img-top" alt="${details.name}">
                <div class="card-body">
                    <h5 class="card-title">${details.name} - Team Size: ${this.team_size}</h5>
                    <p class="card-text">${details.description}</p>
                    <a href="${details.link}" class="btn btn-primary">Click</a>
                </div>
            </div>
        `;
    }
}

const games = [
    new OutdoorGame(1, "Tumbang Preso", "A classic Filipino outdoor game where players try to knock down a can with a slipper.", "./pictures/tumbang preso.jpg", "./tumbangpreso.html", "Medium"),
    new StreetGame(2, "Taguan", "The Filipino version of hide and seek where players search for hidden individuals.", "./pictures/taguan.jpg", "./taguan.html", 2),
    new OutdoorGame(3, "Sipa", "A traditional Filipino game involving a small ball made of rubber or rags that is kicked using the feet.", "./pictures/sipa.webp", "./sipa.html", "Hard"),
    new StreetGame(4, "Piko", "A Filipino hopscotch game where players hop from square to square to reach the top without touching the lines.", "./pictures/piko.jpg", "./piko.html", 4),
    new OutdoorGame(5, "Patintero", "A Filipino street game where two teams try to pass through lines drawn on the ground while avoiding being tagged.", "./pictures/patentiro.jpg", "./patintero.html", "Medium"),
    new StreetGame(6, "Luksong Tinik", "A Filipino jumping game where one player jumps over the others' legs.", "./pictures/Luksong-Tinik.webp", "./luksongtinik.html", 3),
    new OutdoorGame(7, "Luksong Baka", "A Filipino game involving jumping over a person who is bending down, and the height increases as the game goes on.", "./pictures/Luksong Baka.jpg", "./luksongbeka.html", "Hard"),
    new OutdoorGame(8, "Kadang-Kadang", "A traditional Filipino game that involves balancing on bamboo stilts while walking.", "./", "./kadangkadang.html", "Easy"),
    new StreetGame(9, "Agawan Base", "A Filipino team game where players try to take over the opponent's base without being tagged.", "./pictures/agawan_base.jpg", "./agawanbase.html", 4)
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
