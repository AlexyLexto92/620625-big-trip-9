export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
export const arrRandom = (tagArr, tagsStart, tagsEnd, tagsCounts) => {
  const startCount = randomInteger(tagsStart, tagsEnd);
  const tagsNewArray = tagArr.slice(startCount, startCount + tagsCounts);
  return tagsNewArray;
};
export const arraySum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};


