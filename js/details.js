export default class Details {
    constructor() {
        this.detailsElement = document.querySelector('.details');
        this.mainCardElement = document.querySelector('.mainCard');
        this.detailsD = document.querySelector('.detailsD');
        this.btnClose = document.querySelector('.btn-close');

        this.options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ccafc59c2dmshb9c19eb94570772p10e507jsn5e42672eb793',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            },
        };
    }

    async displayDetails(id) {
        this.detailsD.innerHTML = ''; 
            const response = await fetch(
                `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
                this.options
            );
             const gameDetails = await response.json();
             
            this.detailsD.innerHTML = `
                <div class="col-md-4">
                    <img src="${gameDetails.thumbnail}" class="w-100" alt="">
                </div>
                <div class="col-md-8">
                    <h3 class="text-white fs-2">Title: ${gameDetails.title}</h3>
                    <p class="text-white">Category: <span class="badge text-bg-info fw-light">${gameDetails.genre}</span></p>
                    <p class="text-white">Platform: <span class="badge text-bg-info fw-light">${gameDetails.platform}</span></p>
                    <p class="text-white">Status: <span class="badge text-bg-info fw-light">${gameDetails.status}</span></p>
                    <p class="text-white">${gameDetails.description}</p>
                    <a href="${gameDetails.game_url}" target="_blank">
                        <button type="button" class="btn btn-outline-warning">Show Game</button>
                    </a>
                </div>`;
               
        }

    getDetails(id) {
        this.mainCardElement.classList.add('d-none');
        this.detailsElement.classList.remove('d-none'); 
        this.displayDetails(id); 
    }

    detailsCardEventListeners() {
        const cardElements = document.querySelectorAll('.cardCard');
        for (let i = 0; i < cardElements.length; i++) {
            cardElements[i].addEventListener('click', () => {
                const cardId = cardElements[i].dataset.id; // Get game ID
                this.getDetails(cardId); // Show details for this ID
            });
        }
    }

    detailsCloseButton() {
        if (this.btnClose) {
            this.btnClose.addEventListener('click', () => {
                this.detailsElement.classList.add('d-none'); 
                this.mainCardElement.classList.remove('d-none'); 
            });
        }
    }
}
