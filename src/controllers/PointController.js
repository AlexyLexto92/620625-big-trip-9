import {AbstractComponent} from "../components/abstractClass";
import {Card} from "../components/eventInfo";
import {CardAdd} from "../components/eventAdd";
import {render, Position} from '../components/utils.js';
import {getArrRandom} from '../components/utils.js';
import {photosGenerated, photosOption, descriptionElementary, descriptionOption, citiesElementary} from '../components/data.js';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/light.css';
export class PointController extends AbstractComponent {
  constructor(container, data, onDataChange, onChangeView) {
    super();
    this._container = container;
    this._data = data;
    this._card = new Card(data);
    this._cardEdit = new CardAdd(data);
    this._onDataChange = onDataChange;
    this._onChangeView = onChangeView;
    this._init();
  }
  _init() {

    const cardEditElement = this._cardEdit.getElement();
    const cardElement = this._card.getElement();

    flatpickr(cardEditElement.querySelector(`.event__input--time-start`), {
      altInput: true,
      allowInput: true,
      defaultDate: this._data.dueDateStart,
    });
    flatpickr(cardEditElement.querySelector(`.event__input--time-end`), {
      altInput: true,
      allowInput: true,
      defaultDate: this._data.dueDateEnd,
    });

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._container.replaceChild(cardElement, cardEditElement);
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };
    cardElement.querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        this._onChangeView();
        this._container.replaceChild(cardEditElement, cardElement);
        document.addEventListener(`keydown`, onEscKeyDown);
      });
    cardEditElement.querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._container.replaceChild(cardElement, cardEditElement);
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    cardEditElement.querySelector(`.event__save-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(cardEditElement.querySelector(`.event--edit`));
        const entry = {

          type: formData.get(`event-type`),
          cities: citiesElementary,
          city: formData.get(`event-destination`),
          photos: getArrRandom(photosGenerated, photosOption.start, photosGenerated.length, photosOption.count),
          description: getArrRandom(descriptionElementary, descriptionOption.start, descriptionElementary.length, descriptionOption.count),
          dueDateStart: new Date(formData.get(`event-start-time`)),
          dueDateEnd: new Date(formData.get(`event-end-time`)),
          cost: formData.get(`event-price`),
          isFavorite: Boolean(formData.get(`event-favorite`)),

          additionalOptions: formData.getAll(`event-offer-luggage`).reduce((acc, it) => {
            acc.forEach((elem) => {
              if (elem.title === it) {
                elem.isTrue = true;
              }
            });
            return acc;
          },
          [
            {
              title: `Add luggage`,
              coast: 10,
              isTrue: false,
            },
            {
              title: `Switch to comfort class`,
              coast: 150,
              isTrue: false,
            },
            {
              title: `Add meal`,
              coast: 2,
              isTrue: false,
            },
            {
              title: `Choose seats`,
              coast: 9,
              isTrue: false,
            }
          ]
          ),
          allOptions: formData.getAll(`event-offer-luggage`).reduce((acc) => {
            return acc;
          },
          [
            {
              title: `Add luggage`,
              coast: 10,
              isTrue: false,
            },
            {
              title: `Switch to comfort class`,
              coast: 150,
              isTrue: false,
            },
            {
              title: `Add meal`,
              coast: 2,
              isTrue: false,
            },
            {
              title: `Choose seats`,
              coast: 9,
              isTrue: false,
            }
          ]
          ),
        };
        this._container.replaceChild(cardElement, cardEditElement);
        this._onDataChange(entry, this._data);
        document.removeEventListener(`keydown`, onEscKeyDown);

      });
    cardEditElement.querySelector(`.event__reset-btn`).addEventListener(`click`, () => {
      this._cardEdit.removeElement();
      this._card.removeElement();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });


    const events = cardEditElement.querySelectorAll(`.event__type-input`);
    events.forEach((element) => {
      element.addEventListener(`click`, (evt) => {
        cardEditElement.querySelector(`.event__type-icon`).src = `img/icons/${evt.target.value}.png`;
        cardEditElement.querySelector(`.event__type-icon`).alt = `${evt.target.value}`;
        if (evt.target.value === `check-in` || evt.target.value === `restaurant` || evt.target.value === `sightseeing`) {
          cardEditElement.querySelector(`.event__type-output`).innerHTML = `${evt.target.value} in`;
        } else {
          cardEditElement.querySelector(`.event__type-output`).innerHTML = `${evt.target.value} to`;
        }
      });
    });
    render(this._container, cardElement, Position.BEFOREEND);
  }

  setDefaultView() {
    const cardEditElement = this._cardEdit.getElement();
    const cardElement = this._card.getElement();

    if (this._container.contains(cardEditElement)) {
      this._container.replaceChild(cardElement, cardEditElement);
    }
  }
}

