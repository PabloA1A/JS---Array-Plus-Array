import { describe, expect, it } from "vitest";
import { arrSum } from "../src/matrix";

describe('arrSum', () => {
    const testCases = [
        { arr1: [1, 2, 3], arr2: [4, 5, 6], expected: 21 },
    ];

    testCases.forEach(({ arr1, arr2, expected }) => {
        it(`should return ${expected} for arrays [${arr1}] and [${arr2}]`, () => {
          expect(arrSum(arr1, arr2)).toBe(expected);
        })
    })
})
