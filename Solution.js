
/**
 * @param {number} height
 * @param {number} width
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function (height, width, horizontalCuts, verticalCuts) {

    const MODULO_TO_APPLY_FOR_RESULT = Math.pow(10, 9) + 7;
    const comparatorSmallerNumbersFirst = (x, y) => x - y;

    horizontalCuts.sort(comparatorSmallerNumbersFirst);
    let maxSliceHorizontal = Math.max(horizontalCuts[0], (height - horizontalCuts[horizontalCuts.length - 1]));
    for (let i = 1; i < horizontalCuts.length; ++i) {
        maxSliceHorizontal = Math.max(maxSliceHorizontal, (horizontalCuts[i] - horizontalCuts[i - 1]));
    }

    verticalCuts.sort(comparatorSmallerNumbersFirst);
    let maxSliceVertical = Math.max(verticalCuts[0], (width - verticalCuts[verticalCuts.length - 1]));
    for (let i = 1; i < verticalCuts.length; ++i) {
        maxSliceVertical = Math.max(maxSliceVertical, (verticalCuts[i] - verticalCuts[i - 1]));
    }

    return  (BigInt(maxSliceHorizontal) * BigInt(maxSliceVertical)) % BigInt(MODULO_TO_APPLY_FOR_RESULT);
};
