import {getComponentMenu} from './components/menu.js';
import {getComponetTripCoast} from './components/trip-coast';
import {getComponentsTripInfo} from './components/trip-info';
import {getComponentFilter} from './components/filter.js';
import {menu} from './components/data.js';
import {dataTrip} from './components/data.js';
import {TripController} from './controllers/TripController.js';

const tripControls = document.querySelector(`.trip-main__trip-controls`);

const tripControlsFirstHeader = tripControls.querySelector(` h2:first-child`);
const tripControlsSecondHeader = tripControls.querySelector(` h2:nth-child(2)`);
const insertMarkup = (markupContainer, markup, position, MARCKUP_REPLAY = 1) => {
  if (MARCKUP_REPLAY > 1) {
    new Array(MARCKUP_REPLAY).fill(markup).forEach(() =>
      markupContainer.insertAdjacentHTML(position, markup));
  } else {
    markupContainer.insertAdjacentHTML(position, markup);
  }
};

const dataEvent = dataTrip;
insertMarkup(tripControlsFirstHeader, getComponentMenu(), `afterEnd`);
const tripInfoBlock = document.querySelector(`.trip-main__trip-info`);
if (dataEvent.length <= 0) {
  insertMarkup(tripInfoBlock, getComponentsTripInfo(menu), `afterBegin`);
}
const tripCoast = document.querySelector(`.trip-info__cost`);
tripCoast.remove();

insertMarkup(tripInfoBlock, getComponetTripCoast(menu), `beforeEnd`);

insertMarkup(tripControlsSecondHeader, getComponentFilter(), `afterEnd`);


const tripDays = document.querySelector(`.trip-days`);
const tripEvents = document.querySelector(`.trip-events`);
const tripList = document.querySelector(`.trip-events__list`);
const tripCotroller = new TripController(tripList, dataTrip, tripEvents, tripDays);
tripCotroller.init();
