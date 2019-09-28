import moment from 'moment';
export const getComponentsTripInfo = ({cities, dateStart, dateEnd}) => (`
<div class="trip-info__main">
  <h1 class="trip-info__title">
    <font style="vertical-align: inherit;">
    <font style="vertical-align: inherit;">
${cities.length <= 3 ? `${cities[0]} - ${cities[1]} - ${cities[2]} ` : `${cities[0]} - ... - ${cities[cities.length - 1]}`}</font>
    </font>
  </h1>
  <p class="trip-info__dates"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">${moment(dateStart).format(`Do MMM`)} - ${moment(dateEnd).format(`Do MMM`)} марта</font></font></p>
</div>
`);
