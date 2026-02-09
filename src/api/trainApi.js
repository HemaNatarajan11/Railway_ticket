import trains from "../data/trains.json";

export const searchTrainsAPI = ({ from, to }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const results = trains.filter(
        (train) =>
          train.from.toLowerCase() === from.toLowerCase() &&
          train.to.toLowerCase() === to.toLowerCase(),
      );

      resolve(results);
    }, 800);
  });
};
