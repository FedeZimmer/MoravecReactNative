import math from "mathjs";


export class Operand {
    static createRandom(numDigits, options = {allow_zero: true, allow_one: true, allow_multiples_of_10: true}) {
        let value;

        if (numDigits === 1) {
            let possibleValues = [2, 3, 4, 5, 6, 7, 8, 9];
            if (options.allow_zero) {
                possibleValues.push(0);
            }
            if (options.allow_one) {
                possibleValues.push(1);
            }

            value = math.pickRandom(possibleValues);
        } else {
            let min = math.pow(10, numDigits - 1); // 10, 100, 1000...

            if (!options.allow_multiples_of_10) {
                min += 1;  // 11, 101, 1001...
            }

            const max = math.pow(10, numDigits) - 1; // 99, 999, 9999...

            value = math.randomInt(min, max + 1);
        }

        return new Operand(value);
    }

    constructor(value) {
        this._value = value;
    }

    value() {
        return this._value;
    }
}