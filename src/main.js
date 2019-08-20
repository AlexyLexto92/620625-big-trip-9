import {getComponentMenu} from './components/menu.js';
import {getComponetTripCoast} from './components/trip-coast';
import {getComponentsTripInfo} from './components/trip-info';
import {getComponentFilter} from './components/filter.js';
import {getComponentSort} from './components/sort.js';
import {getComponentTripDays} from './components/trip-days.js';
import {menu} from './components/data.js';
import {getComponentEventDay} from './components/event-day';
import {getComponentEventAdd} from './components/eventAdd.js';
import {getComponentEventInfo} from './components/eventInfo.js';
import {dataTrip} from './components/data.js';

const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const dataTripsStart = 1;
const dataTripsCount = 3;
const dataTripsEnd = dataTripsStart + dataTripsCount;
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

insertMarkup(tripControlsFirstHeader, getComponentMenu(), `afterEnd`);
const tripInfoBlock = document.querySelector(`.trip-main__trip-info`);
insertMarkup(tripInfoBlock, getComponentsTripInfo(menu), `afterBegin`);
const tripCoast = document.querySelector(`.trip-info__cost`);
tripCoast.remove();
insertMarkup(tripInfoBlock, getComponetTripCoast(menu), `beforeEnd`);

insertMarkup(tripControlsSecondHeader, getComponentFilter(), `afterEnd`);

insertMarkup(tripEvents, getComponentSort(), `beforeEnd`);

insertMarkup(tripEvents, getComponentTripDays(), `beforeEnd`);

const tripDays = document.querySelector(`.trip-days`);

insertMarkup(tripDays, getComponentEventDay(dataTrip[0]), `beforeEnd`);

const tripEventsList = document.querySelector(`.trip-events__list`);

insertMarkup(tripEventsList, getComponentEventAdd(dataTrip[0]), `afterBegin`);
const dataTrips = dataTrip.slice(dataTripsStart, dataTripsEnd);
for (let elem of dataTrips) {
  insertMarkup(tripEventsList, getComponentEventInfo(elem), `beforeEnd`);
}
