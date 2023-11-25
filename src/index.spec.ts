import { findClosestValues } from './index';

describe('index', () => {
   describe('Avro case', () => {
    let example1: number[];
    let example2: number[];
    beforeEach(() => {
      example1 = [1, 2, 4, 4, 6, 7];
      example2 = [-3, -3, -2, 0, 1, 1, 3, 7, 7];
    });
    it('Should work according to example 1', () => {
      const needle = 3;
      const number = 4;
      const result = findClosestValues(example1, needle, number);
      expect(result).toEqual([1, 2, 4, 4]);
    });
    it('Should work according to example 2', () => {
      const needle = 5;
      const number = 3;
      const result = findClosestValues(example2, needle, number);
      expect(result).toEqual([3, 7, 7]);
    });
  })
});