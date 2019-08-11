export const getComponentEventInfo = () => (`
<ul class="trip-days">
  <li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">1</font>
        </font>
      </span>
      <time class="day__date" datetime="2019-03-18">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">18 марта</font>
        </font>
      </time>
    </div>

    <ul class="trip-events__list">
      <li class="trip-events__item">
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Значок типа события">
          </div>
          <h3 class="event__title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Такси до аэропорта</font>
            </font>
          </h3>

          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T10:30">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">10:30</font>
                </font>
              </time>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  -
                </font>
              </font><time class="event__end-time" datetime="2019-03-18T11:00">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">11:00</font>
                </font>
              </time>
            </p>
            <p class="event__duration">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">1H 30M</font>
              </font>
            </p>
          </div>

          <p class="event__price">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                €&nbsp; </font>
            </font><span class="event__price-value">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">20</font>
              </font>
            </span>
          </p>

          <h4 class="visually-hidden">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Предложения:</font>
            </font>
          </h4>
          <ul class="event__selected-offers">
            <li class="event__offer">
              <span class="event__offer-title">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Заказать Uber</font>
                </font>
              </span>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  + €&nbsp; </font>
              </font><span class="event__offer-price">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">20</font>
                </font>
              </span>
            </li>
          </ul>

          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Открытое мероприятие</font>
              </font>
            </span>
          </button>
        </div>
      </li>

      <li class="trip-events__item">
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/flight.png" alt="Значок типа события">
          </div>
          <h3 class="event__title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Вылет в Женеву</font>
            </font>
          </h3>

          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T12:25">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">12:25</font>
                </font>
              </time>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  -
                </font>
              </font><time class="event__end-time" datetime="2019-03-18T13:35">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">13:35</font>
                </font>
              </time>
            </p>
            <p class="event__duration">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">1H 30M</font>
              </font>
            </p>
          </div>

          <p class="event__price">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                €&nbsp; </font>
            </font><span class="event__price-value">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">160</font>
              </font>
            </span>
          </p>

          <h4 class="visually-hidden">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Предложения:</font>
            </font>
          </h4>
          <ul class="event__selected-offers">
            <li class="event__offer">
              <span class="event__offer-title">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Добавить багаж</font>
                </font>
              </span>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  + €&nbsp; </font>
              </font><span class="event__offer-price">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">50</font>
                </font>
              </span>
            </li>
            <li class="event__offer">
              <span class="event__offer-title">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Переключиться на комфорт</font>
                </font>
              </span>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  + €&nbsp; </font>
              </font><span class="event__offer-price">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">80</font>
                </font>
              </span>
            </li>
          </ul>

          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Открытое мероприятие</font>
              </font>
            </span>
          </button>
        </div>
      </li>

      <li class="trip-events__item">
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/drive.png" alt="Значок типа события">
          </div>
          <h3 class="event__title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Поездка в Шамони</font>
            </font>
          </h3>

          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T14:30">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">14:30</font>
                </font>
              </time>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  -
                </font>
              </font><time class="event__end-time" datetime="2019-03-18T16:05">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">16:05</font>
                </font>
              </time>
            </p>
            <p class="event__duration">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">1H 10M</font>
              </font>
            </p>
          </div>

          <p class="event__price">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                €&nbsp; </font>
            </font><span class="event__price-value">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">160</font>
              </font>
            </span>
          </p>

          <h4 class="visually-hidden">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Предложения:</font>
            </font>
          </h4>
          <ul class="event__selected-offers">
            <li class="event__offer">
              <span class="event__offer-title">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Аренда машины</font>
                </font>
              </span>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  + </font><span class="event__offer-price">
                  <font style="vertical-align: inherit;">200</font>
                </span>
                <font style="vertical-align: inherit;"> евро&nbsp;</font>
              </font><span class="event__offer-price">
                <font style="vertical-align: inherit;"></font>
              </span>
            </li>
          </ul>

          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Открытое мероприятие</font>
              </font>
            </span>
          </button>
        </div>
      </li>

      <li class="trip-events__item">
        <div class="event">
          <div class="event__type">
            <img class="event__type-icon" width="42" height="42" src="img/icons/check-in.png" alt="Значок типа события">
          </div>
          <h3 class="event__title">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Поселение в отель</font>
            </font>
          </h3>

          <div class="event__schedule">
            <p class="event__time">
              <time class="event__start-time" datetime="2019-03-18T12:25">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">12:25</font>
                </font>
              </time>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  -
                </font>
              </font><time class="event__end-time" datetime="2019-03-18T13:35">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">13:35</font>
                </font>
              </time>
            </p>
            <p class="event__duration">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">1H 30M</font>
              </font>
            </p>
          </div>

          <p class="event__price">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                €&nbsp; </font>
            </font><span class="event__price-value">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">600</font>
              </font>
            </span>
          </p>

          <h4 class="visually-hidden">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">Предложения:</font>
            </font>
          </h4>
          <ul class="event__selected-offers">
            <li class="event__offer">
              <span class="event__offer-title">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">Добавить завтрак</font>
                </font>
              </span>
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                  + €&nbsp; </font>
              </font><span class="event__offer-price">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">50</font>
                </font>
              </span>
            </li>
          </ul>

          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">Открытое мероприятие</font>
              </font>
            </span>
          </button>
        </div>
      </li>
    </ul>
  </li>
</ul>
`);
