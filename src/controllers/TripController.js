import {AbstractComponent} from "../components/abstractClass";
import {render, Position, unrender} from '../components/utils.js';
import {NoEvents} from "../components/noEvents";
import {Sort} from "../components/sort";
import {TripDays} from "../components/trip-days";
import {EventDay} from "../components/event-day";
import {PointController} from "./PointController";

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

    this._subscriptions = [];
    this._onChangeView = this._onChangeView.bind(this);
    this._onDataChange = this._onDataChange.bind(this);
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
  _renderBoard() {
    unrender(this._tripContainer.getElement());
    this._tripContainer.removeElement();
    unrender(this._eventDay.getElement());
    this._eventDay.removeElement();
    render(this._eventContainer, this._tripContainer.getElement(), Position.BEFOREEND);
    const tripContainerElem = document.querySelector(`.trip-days`);
    render(tripContainerElem, this._eventDay.getElement(), Position.BEFOREEND);

    this._data.forEach((date) => this._renderCard(date));

  }
  _renderCard(data) {
    const cardsContainer = document.querySelector(`.trip-events__list`);
    const pointController = new PointController(cardsContainer, data, this._onDataChange, this._onChangeView);
    this._subscriptions.push(pointController.setDefaultView.bind(pointController));
  }
  _onDataChange(newData, oldData) {
    this._data[this._data.findIndex((it) => it === oldData)] = newData;
    this._renderBoard(this._data);
  }

  _onChangeView() {
    this._subscriptions.forEach((it) => it());
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
