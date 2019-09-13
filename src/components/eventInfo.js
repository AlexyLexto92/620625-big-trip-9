import {AbstractComponent} from './abstractClass.js';
export class Card extends AbstractComponent {
  constructor({type, cost, dueDate, additionalOptions}) {
    super();
    this._type = type;
    this._cost = cost;
    this._dueDate = dueDate;
    this._additionalOptions = additionalOptions;
  }

  getTemplate() {
    return `<li class="trip-events__item">
      <div class="event">
         <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src=${this._type.src} alt=${this._type.title}>
         </div>
         <h3 class="event__title">${this._type.description}</h3>
         <div class="event__schedule">
            <p class="event__time">
               <time class="event__start-time" datetime="${new Date(this._dueDate).toDateString()}">${new Date(this._dueDate).getHours()}:${new Date(this._dueDate).getMinutes()}</time>
               —
               <time class="event__end-time" datetime="${new Date(this._dueDate).toDateString()}">
               ${new Date(this._dueDate).getHours()}: ${(new Date(this._dueDate).getMinutes() < 10) ? `0 ${new Date(this._dueDate).getMinutes()}` : `${new Date(this._dueDate).getMinutes()}`}</time>
            </p>
            <p class="event__duration">1H</p>
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
