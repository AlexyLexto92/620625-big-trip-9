import {getRandomInteger} from './utils.js';
import {getArrRandom} from './utils.js';
import {getArraySum} from './utils.js';

const NUMBER_OF_REPETITIONS = 4;
const NUMBER_OF_PHOTOS = 16;
export const additionalOptionsOption = {
  start: 0,
  count: 2,
};
export const photosOption = {
  start: 0,
  count: 4,
};
export const descriptionOption = {
  start: 0,
  count: 3,
};
export const coastOption = {
  min: 20,
  max: 600,
};

export const descriptionElementary = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`
];
export const citiesElementary = [`Warsaw`, `Dnipro`, `Dresden`, `Berlin`];
const typesElementary = [`bus`, `check-in`, `drive`, `flight`, `restaurant`, `ship`, `sightseeing`, `taxi`, `train`, `transport`];
export const optionsAll = [{
  title: `Add luggage`,
  coast: 10,
  isTrue: Boolean(getRandomInteger(0, 1)),
},
{
  title: `Switch to comfort class`,
  coast: 150,
  isTrue: Boolean(getRandomInteger(0, 1)),
},
{
  title: `Add meal`,
  coast: 2,
  isTrue: Boolean(getRandomInteger(0, 1)),
},
{
  title: `Choose seats`,
  coast: 9,
  isTrue: Boolean(getRandomInteger(0, 1)),
},
];

const coasts = new Array(NUMBER_OF_REPETITIONS)
.fill(getRandomInteger(coastOption.min, coastOption.max))
.map(() => getRandomInteger(coastOption.min, coastOption.max));

const getPhoto = () => (`
http://picsum.photos/300/150?r=${Math.random()}
`);
export const photosGenerated = new Array(NUMBER_OF_PHOTOS).fill(getPhoto()).map(getPhoto);

export const getDataTrip = () => ({
  type: typesElementary[[Math.floor(Math.random() * typesElementary.length)]],
  cities: citiesElementary,
  city: citiesElementary[[Math.floor(Math.random() * citiesElementary.length)]],
  photos: getArrRandom(photosGenerated, photosOption.start, photosGenerated.length, photosOption.count),
  description: getArrRandom(descriptionElementary, descriptionOption.start, descriptionElementary.length, descriptionOption.count),
  dueDateStart: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  dueDateEnd: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  cost: coasts[Math.floor(Math.random() * coasts.length)],
  isFavorite: Boolean(getRandomInteger(0, 1)),
  additionalOptions: getArrRandom(optionsAll, additionalOptionsOption.start, optionsAll.length, additionalOptionsOption.count),
  allOptions: optionsAll
});

export const dataTrip = new Array(NUMBER_OF_REPETITIONS).fill(getDataTrip()).map(getDataTrip);
export const menu = {
  cities: citiesElementary,
  get totalCoast() {
    return getArraySum(coasts);
  },
  dateStart: new Date(dataTrip[0].dueDate),
  dateEnd: new Date(dataTrip[0].dueDate)
};

export const filters = [{
  title: `Everything`,
},
{
  title: `Future`,
},
{
  title: `Past`,
}
];

