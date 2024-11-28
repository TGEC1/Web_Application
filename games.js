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
        this.team_size = team_size; // Additional property for street games
    }

    // Overriding renderCard for StreetGame (Polymorphism)
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

