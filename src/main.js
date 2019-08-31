import {getComponentMenu} from './components/menu.js';
import {getComponetTripCoast} from './components/trip-coast';
import {getComponentsTripInfo} from './components/trip-info';
import {getComponentFilter} from './components/filter.js';
import {getComponentSort} from './components/sort.js';
import {getComponentTripDays} from './components/trip-days.js';
import {menu} from './components/data.js';
import {getComponentEventDay} from './components/event-day';
import {CardAdd} from './components/eventAdd.js';
import {Card} from './components/eventInfo.js';
import {dataTrip} from './components/data.js';
import {render, Position} from './components/utils.js';
import {getNoEvents} from './components/noEvents.js';

const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
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


if (dataEvent.length <= 0) {
  insertMarkup(tripEvents, getNoEvents(), `beforeend`);
} else {
  const renderCard = (data) => {

    const card = new Card(data);
    const cardEdit = new CardAdd(data);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        tripEventsList.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };
    card.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        tripEventsList.replaceChild(cardEdit.getElement(), card.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });
    cardEdit.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        tripEventsList.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    cardEdit.getElement().querySelector(`.event__save-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        tripEventsList.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);

      });
    cardEdit.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, () => {
      cardEdit.removeElement();
      card.removeElement();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

    render(tripEventsList, card.getElement(), Position.BEFOREEND);
  };

  insertMarkup(tripEvents, getComponentSort(), `beforeEnd`);
  insertMarkup(tripEvents, getComponentTripDays(), `beforeEnd`);

  const tripDays = document.querySelector(`.trip-days`);
  insertMarkup(tripDays, getComponentEventDay(dataEvent[0]), `beforeEnd`);

  const tripEventsList = document.querySelector(`.trip-events__list`);
  dataEvent.forEach((data) => renderCard(data));
}
