export const getRandomInteger = (min, max) => Math.round(min + Math.random() * (max + 1 - min));

export const getArrRandom = (tags, tagsStart, tagsEnd, tagsCounts) => {
  const startCount = getRandomInteger(tagsStart, tagsEnd);
  const tagsNewArray = tags.slice(startCount, startCount + tagsCounts);
  return tagsNewArray;
};
export const getArraySum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};


export const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};

// Рендер и анрендер для компонент
export const render = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

export const unrender = (element) => {
  if (element) {
    element.remove();
  }
};
