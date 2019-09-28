import {AbstractComponent} from "./abstractClass";
import moment from "moment";
export class EventDay extends AbstractComponent {
  constructor({dateStart, dateEnd}) {
    super();
    this._dateStart = dateStart;
    this._dateEnd = dateEnd;
  }
  getTemplate() {
    return `<li class="trip-days__item  day">
    <div class="day__info">
     <span class="day__counter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></span>
        <time class="" datetime="${moment(this._dateStart).format(`Do MMM`)}"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${moment(this._dateStart).format(`Do MMM`)}</font></font></time>
    </div>
    <ul class="trip-events__list">
    </ul>
  </li>`;
  }
}
