import {ToSquareHint} from "../src/models/hints/ToSquareHint";
import {ToSquare} from "../src/actions/operations/ToSquare";

test('creates hint for 16^2 correctly', () => {
    const operation = new ToSquare(null, 16);

    const hint = ToSquareHint.of(operation).getHint();

    expect(hint[0]).toBe("x^2 = (x-a)(x+a) + a^2");
    expect(hint[1]).toBe("(16-4) x (16+4) + 4^2");
    expect(hint[2]).toBe("(12x20) + 4^2");
});

test('creates hint for 51^2 correctly', () => {
    const operation = new ToSquare(null, 51);

    const hint = ToSquareHint.of(operation).getHint();

    expect(hint.length).toBe(3);
    expect(hint[0]).toBe("x^2 = (x-a)(x+a) + a^2");
    expect(hint[1]).toBe("(51-1) x (51+1) + 1^2");
    expect(hint[2]).toBe("(50x52) + 1^2");
});

test('creates hint for 763^2 correctly', () => {
    const operation = new ToSquare(null, 763);

    const hint = ToSquareHint.of(operation).getHint();

    expect(hint.length).toBe(4);
    expect(hint[0]).toBe("x^2 = (x-a)(x+a) + a^2");
    expect(hint[1]).toBe("(763-37) x (763+37) + 37^2");
    expect(hint[2]).toBe("(726x800) + (37-3) x (37+3) + 3^2");
    expect(hint[3]).toBe("(726x800) + (34x40) + 3^2");
});

test('creates hint for 501^2 correctly', () => {
    const operation = new ToSquare(null, 501);

    const hint = ToSquareHint.of(operation).getHint();

    expect(hint.length).toBe(3);
    expect(hint[0]).toBe("x^2 = (x-a)(x+a) + a^2");
    expect(hint[1]).toBe("(501-1) x (501+1) + 1^2");
    expect(hint[2]).toBe("(500x502) + 1^2");
});

test('creates hint for 5572^2 correctly', () => {
    const operation = new ToSquare(null, 5572);

    const hint = ToSquareHint.of(operation).getHint();

    expect(hint.length).toBe(5);
    expect(hint[0]).toBe("x^2 = (x-a)(x+a) + a^2");
    expect(hint[1]).toBe("(5572-428) x (5572+428) + 428^2");
    expect(hint[2]).toBe("(5144x6000) + (428-28) x (428+28) + 28^2");
    expect(hint[3]).toBe("(5144x6000) + (400x456) + (28-2) x (28+2) + 2^2");
    expect(hint[4]).toBe("(5144x6000) + (400x456) + (26x30) + 2^2");
});

test('creates hint for 1500^2 correctly', () => {
    const operation = new ToSquare(null, 1500);

    const hint = ToSquareHint.of(operation).getHint();

    expect(hint.length).toBe(4);
    expect(hint[0]).toBe("x^2 = (x-a)(x+a) + a^2");
    expect(hint[1]).toBe("(1500-500) x (1500+500) + 500^2");
    expect(hint[2]).toBe("(1000x2000) + (500-0) x (500+0) + 0^2");
    expect(hint[3]).toBe("(1000x2000) + (500x500) + 0^2");
});

test('creates hint for 2270^2 correctly', () => {
    const operation = new ToSquare(null, 2270);

    const hint = ToSquareHint.of(operation).getHint();

    expect(hint.length).toBe(5);
    expect(hint[0]).toBe("x^2 = (x-a)(x+a) + a^2");
    expect(hint[1]).toBe("(2270-270) x (2270+270) + 270^2");
    expect(hint[2]).toBe("(2000x2540) + (270-30) x (270+30) + 30^2");
    expect(hint[3]).toBe("(2000x2540) + (240x300) + (30-0) x (30+0) + 0^2");
    expect(hint[4]).toBe("(2000x2540) + (240x300) + (30x30) + 0^2");
});

test('creates hint for 8027^2 correctly', () => {
    const operation = new ToSquare(null, 8027);

    const hint = ToSquareHint.of(operation).getHint();

    expect(hint.length).toBe(4);
    expect(hint[0]).toBe("x^2 = (x-a)(x+a) + a^2");
    expect(hint[1]).toBe("(8027-27) x (8027+27) + 27^2");
    expect(hint[2]).toBe("(8000x8054) + (27-3) x (27+3) + 3^2");
    expect(hint[3]).toBe("(8000x8054) + (24x30) + 3^2");
});