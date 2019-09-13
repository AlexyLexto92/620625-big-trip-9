import {AbstractComponent} from "./abstractClass";

export class EventDay extends AbstractComponent {
  constructor({dueDate}) {
    super();
    this._dueDate = dueDate;
  }
  getTemplate() {
    return `<li class="trip-days__item  day">
    <div class="day__info">
     <span class="day__counter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></span>
        <time class="" datetime="${new Date(this._dueDate).toDateString()}"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${new Date(this._dueDate).getDate()} марта</font></font></time>
    </div>
    <ul class="trip-events__list">
    </ul>
  </li>`;
  }
}
