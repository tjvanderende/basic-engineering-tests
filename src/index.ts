export function findClosestValues(array: number[], needle: number, number: number): number[] {
  const sortFromClosestToFar = array.sort((a, b) => Math.abs(needle - a) - Math.abs(needle - b)); // sort the array from closest to needle to the farthest
  const selectClosestTopNValues = sortFromClosestToFar.slice(0, number); // select the top N values
  return selectClosestTopNValues.sort((a, b) => a - b); // sort again to retun the values from low to high.
}
