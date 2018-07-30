import {MultiplicationHint} from "../src/models/hints/MultiplicationHint";
import {Multiplication} from "../src/models/operations/Multiplication";

test('creates hint for 94 x 2 correctly', () => {
    const operation = Multiplication.create(94, 2);

    const hint = MultiplicationHint.of(operation).getHint();

    expect(hint[0]).toBe("90x2 + 4x2");
});

test('creates hint for 20 x 3 correctly', () => {
    const operation = Multiplication.create(20, 3);

    const hint = MultiplicationHint.of(operation).getHint();

    expect(hint[0]).toBe("20x3 + 0x3");
});

test('creates hint for 869 x 4 correctly', () => {
    const operation = Multiplication.create(869, 4);

    const hint = MultiplicationHint.of(operation).getHint();

    expect(hint[0]).toBe("800x4 + 60x4 + 9x4");
});

test('creates hint for 210 x 9 correctly', () => {
    const operation = Multiplication.create(210, 9);

    const hint = MultiplicationHint.of(operation).getHint();

    expect(hint[0]).toBe("200x9 + 10x9 + 0x9");
});

test('creates hint for 701 x 5 correctly', () => {
    const operation = Multiplication.create(701, 5);

    const hint = MultiplicationHint.of(operation).getHint();

    expect(hint[0]).toBe("700x5 + 0x5 + 1x5");
});

test('creates hint for 6651 x 5 correctly', () => {
    const operation = Multiplication.create(6651, 5);

    const hint = MultiplicationHint.of(operation).getHint();

    expect(hint[0]).toBe("6000x5 + 600x5 + 50x5 + 1x5");
});

test('creates hint for 5004 x 7 correctly', () => {
    const operation = Multiplication.create(5004, 7);

    const hint = MultiplicationHint.of(operation).getHint();

    expect(hint[0]).toBe("5000x7 + 0x7 + 0x7 + 4x7");
});