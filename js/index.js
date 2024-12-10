import GamesApp from './display.js';
import Details from './details.js';
import uiClass from './UI.js';

//ui
const displayUi = new uiClass();
displayUi.displayUi();

// GamesApp
const displayGames = new GamesApp();
displayGames.fetchGames('mmorpg');
displayGames.addLinkEventListeners();

//GamesDetails
const gameDetails = new Details();
setTimeout(() => {
gameDetails.detailsCardEventListeners();
gameDetails.detailsCloseButton();
}, 1000);

