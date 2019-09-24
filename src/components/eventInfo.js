import {AbstractComponent} from './abstractClass.js';
import moment from 'moment';
export class Card extends AbstractComponent {
  constructor({type, cost, dueDate, additionalOptions, dueDateStart, dueDateEnd, city}) {
    super();
    this._city = city;
    this._dueDateStart = dueDateStart;
    this._dueDateEnd = dueDateEnd;
    this._type = type;
    this._cost = cost;
    this._dueDate = dueDate;
    this._additionalOptions = additionalOptions;
  }

  getTemplate() {
    return `<li class="trip-events__item">
      <div class="event">
         <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src=img/icons/${this._type}.png alt=${this._type}>
         </div>
         <h3 class="event__title">${this._type === `sightseeing` || this._type === `restaurant` || this._type === `check-in` ? `${this._type} in ${this._city}` : `${this._type} to ${this._city}`} </h3>
         <div class="event__schedule">
            <p class="event__time">
               <time class="event__start-time" datetime="${moment(this._dueDateStart).format(`dddd, MMMM Do YYYY`)}">
               ${moment(this._dueDateStart).format(`h:mm`)}</time>
               —
               <time class="event__end-time" datetime="${moment(this._dueDateStart).format(`dddd, MMMM Do YYYY`)}">
               ${moment(this._dueDateEnd).format(`h:mm`)}</time>
            </p>
            <p class="event__duration">
            ${moment(this._dueDateStart - this._dueDateEnd).format(`h:mm`)}</p>
         </div>
         <p class="event__price">
            €&nbsp;<span class="event__price-value">${this._cost}</span>
         </p>
         <h4 class="visually-hidden">Offers:</h4>
         <ul class="event__selected-offers">

         ${this._additionalOptions.map((option) =>
    option.isTrue ? `<li class="event__offer">
               <span class="event__offer-title">${option.title}</span>
               +
               €&nbsp;<span class="event__offer-price">${option.coast}</span>
            </li>` : ` `).join(` `)}
         </ul>
         <button class="event__rollup-btn" type="button">
         <span class="visually-hidden">Open event</span>
         </button>
       </div>
     </li>`;
  }
}
