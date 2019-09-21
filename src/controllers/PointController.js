import { AbstractComponent } from "../components/abstractClass";
import { Card } from "../components/eventInfo";
import { CardAdd } from "../components/eventAdd";
import { render, Position } from '../components/utils.js';

export class PointController extends AbstractComponent {
  constructor(container, data ,onDataChange, onChangeView) {
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

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        this._container.replaceChild(this._card.getElement(), this._cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };
    this._card.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, () => {
        this._onChangeView();
        this._container.replaceChild(this._cardEdit.getElement(), this._card.getElement());
        document.addEventListener(`keydown`, onEscKeyDown);
      });
    this._cardEdit.getElement().querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._container.replaceChild(this._card.getElement(), this._cardEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      });

    this._cardEdit.getElement().querySelector(`.event__save-btn`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        this._container.replaceChild(this._card.getElement(), this._cardEdit.getElement());
        const formData = new FormData(this._cardEdit.getElement().querySelector(`.event--edit`));
        const entry = {

          type: formData.get(`event-type`),

          cities: formData.getAll(`event-destination`),
       //   photos: formData.getAll(``),
         // description: ,
          dueDate: new Date(formData.get(`date`)),
          cost: formData.get(`event-price`),
          isFavorite:formData.get(`event-favorite`),

          additionalOptions: formData.getAll(`event-offer-luggage`).reduce((acc, it,index) => {
            debugger
            acc[it]= checked;
            return acc
          },[
            {
              title: `Add luggage`,
              coast: 10,
              isTrue:false,
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
          optionsAll : formData.getAll(`event-offer-luggage`),

        };

        this._onDataChange(entry, this._data);
        document.removeEventListener(`keydown`, onEscKeyDown);

      });
    this._cardEdit.getElement().querySelector(`.event__reset-btn`).addEventListener(`click`, () => {
      this._cardEdit.removeElement();
      this._card.removeElement();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });


    const events=  this._cardEdit.getElement().querySelectorAll(`.event__type-input`);
    events.forEach((element) => {
      element.addEventListener(`click`, (evt) => {
        debugger

  evt.target.value


        this._cardEdit.getElement().querySelector(`.event__type-icon`).src = `img/icons/${evt.target.value}.png`;
        this._cardEdit.getElement().querySelector(`.event__type-icon`).alt =`${evt.target.value}`;
        if(evt.target.value === `check-in` || evt.target.value === `restaurant` || evt.target.value === `sightseeing`){
          this._cardEdit.getElement().querySelector(`.event__type-output`).innerHTML = `${evt.target.value} in`;
        } else{
        this._cardEdit.getElement().querySelector(`.event__type-output`).innerHTML = `${evt.target.value} to`;
      }
  })
});



    render(this._container, this._card.getElement(), Position.BEFOREEND);
  }

  setDefaultView() {
		if (this._container.contains(this._cardEdit.getElement())) {
			this._container.replaceChild(this._card.getElement(), this._cardEdit.getElement());
		}
	}
}

