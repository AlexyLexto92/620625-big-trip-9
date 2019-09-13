import {AbstractComponent} from "../components/abstractClass";
import {render, Position} from '../components/utils.js';
import {Card} from "../components/eventInfo";
import {CardAdd} from "../components/eventAdd";
import {NoEvents} from "../components/noEvents";

export class TripController extends AbstractComponent {
  constructor(container, data) {
    super();
    this._container = container;
    this._data = data;
    this._noEvents = new NoEvents();
  }
  init() {
    if (this._data.length <= 0 || this._data === undefined) {
      render(this._container, this._noEvents.getElement(), Position.AFTERBEGIN);
    } else {
      this._data.forEach((date) => this._renderCard(date));
    }
  }
  _renderCard(data) {

    const card = new Card(data);
    const cardEdit = new CardAdd(data);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._container.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };
    card.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        this._container.replaceChild(cardEdit.getElement(), card.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });
    cardEdit.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._container.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    cardEdit.getElement().querySelector(`.event__save-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._container.replaceChild(card.getElement(), cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);

      });
    cardEdit.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, () => {
      cardEdit.removeElement();
      card.removeElement();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

    render(this._container, card.getElement(), Position.BEFOREEND);
  }
}
