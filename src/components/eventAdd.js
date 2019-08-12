export const getComponentEventAdd = () => (`
   <form class="trip-events__item  event  event--edit" action="#" method="post">
      <header class="event__header">
         <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">
            <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Выберите тип события</font>
            </font>
            </span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Значок типа события">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
               <fieldset class="event__type-group">
                  <legend class="visually-hidden">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Перечислить</font>
                     </font>
                  </legend>
                  <div class="event__type-item">
                     <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                        value="taxi">
                     <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Такси</font>
                     </font>
                     </label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                        value="bus">
                     <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">автобус</font>
                     </font>
                     </label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                        value="train">
                     <label class="event__type-label  event__type-label--train" for="event-type-train-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Поезд</font>
                     </font>
                     </label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                        value="ship">
                     <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Корабль</font>
                     </font>
                     </label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                        value="transport">
                     <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Транспорт</font>
                     </font>
                     </label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                        value="drive">
                     <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Привод</font>
                     </font>
                     </label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                        value="flight" checked="">
                     <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Рейс</font>
                     </font>
                     </label>
                  </div>
               </fieldset>
               <fieldset class="event__type-group">
                  <legend class="visually-hidden">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Деятельность</font>
                     </font>
                  </legend>
                  <div class="event__type-item">
                     <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type"
                        value="check-in">
                     <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Регистрироваться</font>
                     </font>
                     </label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio"
                        name="event-type" value="sightseeing">
                     <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">экскурсионный</font>
                     </font>
                     </label>
                  </div>
                  <div class="event__type-item">
                     <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio"
                        name="event-type" value="restaurant">
                     <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">
                     <font style="vertical-align: inherit;">
                     <font style="vertical-align: inherit;">Ресторан</font>
                     </font>
                     </label>
                  </div>
               </fieldset>
            </div>
         </div>
         <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
            <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
            Осмотр достопримечательностей в
            </font>
            </font>
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text"
               name="event-destination" value="" list="destination-list-1">
            <datalist id="destination-list-1">
               <option value="Amsterdam"></option>
               <option value="Geneva"></option>
               <option value="Chamonix"></option>
               <option value="Saint Petersburg"></option>
            </datalist>
         </div>
         <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">
            <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
            От
            </font>
            </font>
            </label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
               value="18/03/19 00:00">
            <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
            -
            </font>
            </font><label class="visually-hidden" for="event-end-time-1">
            <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
            Для
            </font>
            </font>
            </label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
               value="18/03/19 00:00">
         </div>
         <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
            <span class="visually-hidden">
            <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Цена</font>
            </font>
            </span>
            <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
            €
            </font>
            </font>
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
         </div>
         <button class="event__save-btn  btn  btn--blue" type="submit">
         <font style="vertical-align: inherit;">
         <font style="vertical-align: inherit;">Сохранить</font>
         </font>
         </button>
         <button class="event__reset-btn" type="reset">
         <font style="vertical-align: inherit;">
         <font style="vertical-align: inherit;">отменить</font>
         </font>
         </button>
      </header>
   </form>
`);
