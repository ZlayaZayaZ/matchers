import sortHealth from '../index';

test.each([
  {
    test: [
      { name: 'мечник', health: 50 },
      { name: 'лучник', health: 10 },
      { name: 'маг', health: 100 },
    ],
    extended: [
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 50 },
      { name: 'лучник', health: 10 },
    ],
  },
  {
    test: [
      { name: 'мечник', health: 50 },
      { name: 'лучник', health: 50 },
      { name: 'маг', health: 100 },
    ],
    extended: [
      { name: 'маг', health: 100 },
      { name: 'мечник', health: 50 },
      { name: 'лучник', health: 50 },
    ],
  },
])('health sorting test', (test) => {
  expect(sortHealth(test.test)).toStrictEqual(test.extended);
});
