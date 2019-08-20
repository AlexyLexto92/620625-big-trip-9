export const getComponentEventDay = ({dueDate}) =>(`
  <li class="trip-days__item  day">
    <div class="day__info">
     <span class="day__counter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></span>
        <time class="" datetime="${new Date(dueDate).toDateString()}"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${new Date(dueDate).getDate()} марта</font></font></time>
    </div>
    <ul class="trip-events__list">
    </ul>
  </li>
`);
