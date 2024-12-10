
export default class GamesApp {
    constructor() {
        this.allGames = [];
        this.options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ccafc59c2dmshb9c19eb94570772p10e507jsn5e42672eb793',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        this.loaderElement = document.querySelector('.loader');
        this.rowElement = document.querySelector('.row');
        this.links = Array.from(document.querySelectorAll('.links'));
    }

    async fetchGames(category) {
        try {
            this.loaderElement.classList.remove('d-none');
            const response = await fetch(
                `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
                this.options
            );
            const data = await response.json();
            this.allGames = data;
            this.displayGames();
            this.loaderElement.classList.add('d-none');
        } catch (error) {
            console.error("Error fetching games:", error);
        }
    }

   displayGames() {
    let cartona = '';
    for (let i = 0; i < this.allGames.length; i++) {
        cartona += `
        <div class="col-md-3">
            <div class="card cardCard" data-id="${this.allGames[i].id}">
                <div class="px-3 pt-3 pb-0">
                    <img src="${this.allGames[i].thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body px-0">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title text-white">${this.allGames[i].title.split(' ', 4).join(' ')}</h5>
                            <span class="bg-free px-2 py-1 rounded-3 ">Free</span>
                        </div>
                        <p class="card-text text-center text-white-50">
                            ${this.allGames[i].short_description.split(' ', 4).join(' ')}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="bg-footer px-2 rounded-3">${this.allGames[i].genre}</span>
                        <span class="bg-footer px-2 rounded-3">${this.allGames[i].platform}</span>
                    </div>
                </div>
            </div>
        </div>`;
    }
    this.rowElement.innerHTML = cartona;

    // const cardElements = document.querySelectorAll('.cardCard');
    // cardElements.forEach(card => {
    //     card.addEventListener('click', this.getDetails.bind(this));
    // });
}

    addLinkEventListeners() {
        for (let i = 0; i < this.links.length; i++) {
            this.links[i].addEventListener('click', (e) => {
                e.preventDefault();
                for (let j = 0; j < this.links.length; j++) {
                    this.links[j].classList.remove('active');
                }
                e.target.classList.add('active');
                const category = this.links[i].textContent.trim().toLowerCase();
                this.fetchGames(category);
            });
        }
    }
}

