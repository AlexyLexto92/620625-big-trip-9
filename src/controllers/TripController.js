import {AbstractComponent} from "../components/abstractClass";
import {render, Position} from '../components/utils.js';
import {Card} from "../components/eventInfo";
import {CardAdd} from "../components/eventAdd";
import {NoEvents} from "../components/noEvents";
import {Sort} from "../components/sort";
import {TripDays} from "../components/trip-days";
import {EventDay} from "../components/event-day";

export class TripController extends AbstractComponent {
  constructor(cardsContainer, data, eventContainer, tripDaysContainer) {
    super();
    this._tripDaysContainer = tripDaysContainer;
    this._eventContainer = eventContainer;
    this._cardsContainer = cardsContainer;
    this._data = data;
    this._noEvents = new NoEvents();
    this._sort = new Sort();
    this._tripContainer = new TripDays();
    this._eventDay = new EventDay(data[0]);
  }
  init() {
    render(this._eventContainer, this._sort.getElement(), Position.BEFOREEND);
    render(this._eventContainer, this._tripContainer.getElement(), Position.BEFOREEND);
    const tripContainerElem = document.querySelector(`.trip-days`);
    render(tripContainerElem, this._eventDay.getElement(), Position.BEFOREEND);
    this._sort.getElement()
    .addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
    this._data.forEach((date) => this._renderCard(date));
  }

  _renderCard(data) {
    const cardsContainer = document.querySelector(`.trip-events__list`);
    const card = new Card(data);
    const cardEdit = new CardAdd(data);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        cardsContainer.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };
    card.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        cardsContainer.replaceChild(cardEdit.getElement(), card.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });
    cardEdit.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        cardsContainer.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    cardEdit.getElement().querySelector(`.event__save-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        cardsContainer.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);

      });
    cardEdit.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, () => {
      cardEdit.removeElement();
      card.removeElement();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

    render(cardsContainer, card.getElement(), Position.BEFOREEND);
  }

  _onSortLinkClick(evt) {

    evt.preventDefault();
    if (evt.target.tagName !== `LABEL`) {
      return;
    }
    const cardsContainer = document.querySelector(`.trip-events__list`);
    cardsContainer.innerHTML = ``;
    switch (evt.target.dataset.sortType) {

      case `event`:
        this._data.forEach((date) => this._renderCard(date));
        break;
      case `time`:
        const sortedByDateDownTime = this._data.slice().sort((a, b) => b.dueDate - a.dueDate);
        sortedByDateDownTime.forEach((date) => this._renderCard(date));
        break;
      case `price`:
        const sortedByDateDownPrice = this._data.slice().sort((a, b) => b.cost - a.cost);
        sortedByDateDownPrice.forEach((date) => this._renderCard(date));
        break;
    }
  }
}
