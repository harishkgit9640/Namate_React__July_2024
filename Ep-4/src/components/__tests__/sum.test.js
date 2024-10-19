import { Sum } from "../Sum";

test('calculate the two number and get the result', () => {
    const result = Sum(2, 3);

    // assertion
    expect(result).toBe(5);
})