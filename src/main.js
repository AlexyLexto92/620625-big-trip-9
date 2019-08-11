import {getComponentMenu} from './components/menu.js';
import {getComponentFilter} from './components/filter.js';
import {getComponentSort} from './components/sort.js';
import {getComponentEventAdd} from './components/eventAdd.js';
import {getComponentEventInfo} from './components/eventInfo.js';

const tripControls = document.querySelector(`.trip-main__trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);
const tripControlsFirstHeader = tripControls.querySelector(` h2:first-child`);
const tripControlsSecondHeader = tripControls.querySelector(` h2:nth-child(2)`);
const insertMarkup = (markupContainer, markup, position, markupReplay = 1) => {
  if (markupReplay > 1) {
    new Array(markupReplay).fill(markup).forEach(() =>
      markupContainer.insertAdjacentHTML(position, markup));
  } else {
    markupContainer.insertAdjacentHTML(position, markup);
  }
};

insertMarkup(tripControlsFirstHeader, getComponentMenu(), `afterEnd`);
insertMarkup(tripControlsSecondHeader, getComponentFilter(), `afterEnd`);
insertMarkup(tripEvents, getComponentSort(), `beforeEnd`);
insertMarkup(tripEvents, getComponentEventAdd(), `beforeEnd`);
insertMarkup(tripEvents, getComponentEventInfo(), `beforeEnd`, 3);
