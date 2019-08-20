import {randomInteger} from './utils.js';
import {arrRandom} from './utils.js';
import {arraySum} from './utils.js';

const NUMBER_OF_REPETITIONS = 4;
const NUMBER_OF_PHOTOS = 16;
const additionalOptionsStart = 0;
const additionalOptionsCount = 2;
const photosStart = 0;
const photosCount = 4;
const descriptionStart = 0;
const descriptionCount = 3;
const minCoast = 20;
const maxCoast = 600;

const getCoast = () => {
  let rand = minCoast + Math.random() * (maxCoast + 1 - minCoast);
  return Math.floor(rand);
};

const descriptionArray = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`
];
export const citiesArray = [`Warsaw`, `Dnipro`, `Dresden`, `Berlin`];
const typeArray = [{
  title: `bus`,
  src: `img/icons/bus.png`,
  description: `Bus to`
},
{
  title: `check-in`,
  src: `img/icons/check-in.png`,
  description: `Checkin`
},
{
  title: `drive`,
  src: `img/icons/drive.png`,
  description: `Drive to `
},
{
  title: `flight`,
  src: `img/icons/flight.png`,
  description: `Flight to `
},
{
  title: `restaurant`,
  src: `img/icons/restaurant.png`,
  description: `Restaurant in`
},
{
  title: `ship`,
  src: `img/icons/ship.png`,
  description: `Ship to`
},
{
  title: `sightseeing`,
  src: `img/icons/sightseeing.png`,
  description: `Sightseeing in`
},
{
  title: `taxi`,
  src: `img/icons/taxi.png`,
  description: `Taxi to`
},
{
  title: `train`,
  src: `img/icons/train.png`,
  description: `Train to`
},
{
  title: `transport`,
  src: `img/icons/transport.png`,
  description: `Drive on`
}
];
export const additionalOptionsArray = [{
  title: `Add luggage`,
  coast: 10,
  isTrue: Boolean(randomInteger(0, 1)),
},
{
  title: `Switch to comfort class`,
  coast: 150,
  isTrue: Boolean(randomInteger(0, 1)),
},
{
  title: `Add meal`,
  coast: 2,
  isTrue: Boolean(randomInteger(0, 1)),
},
{
  title: `Choose seats`,
  coast: 9,
  isTrue: Boolean(randomInteger(0, 1)),
},
];

const coasts = new Array(NUMBER_OF_REPETITIONS).fill(getCoast()).map(getCoast);

const getPhotos = () => (`
http://picsum.photos/300/150?r=${Math.random()}
`);
const photosArray = new Array(NUMBER_OF_PHOTOS).fill(getPhotos()).map(getPhotos);

export const getDataTrip = () => ({
  type: typeArray[[Math.floor(Math.random() * typeArray.length)]],
  cities: citiesArray,
  photos: arrRandom(photosArray, photosStart, photosArray.length, photosCount),
  description: arrRandom(descriptionArray, descriptionStart, descriptionArray.length, descriptionCount),
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  cost: coasts[Math.floor(Math.random() * coasts.length)],
  isFavorite: Boolean(randomInteger(0, 1)),
  additionalOptions: arrRandom(additionalOptionsArray, additionalOptionsStart, additionalOptionsArray.length, additionalOptionsCount),
});

export let dataTrip = new Array(NUMBER_OF_REPETITIONS).fill(getDataTrip()).map(getDataTrip);

export const menues = {
  cities: citiesArray,
  get totalCoast() {
    return arraySum(coasts);
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
