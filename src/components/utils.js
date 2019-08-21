export const randomInteger = (min, max) => Math.round(min + Math.random() * (max + 1 - min));

export const arrRandom = (tags, tagsStart, tagsEnd, tagsCounts) => {
  const startCount = randomInteger(tagsStart, tagsEnd);
  const tagsNewArray = tags.slice(startCount, startCount + tagsCounts);
  return tagsNewArray;
};
export const arraySum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};


