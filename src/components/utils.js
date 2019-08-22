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


