import math from "mathjs";


export class Operand {
    static createRandom(numDigits) {
        const min = math.pow(10, numDigits - 1);
        const max = math.pow(10, numDigits) - 1;
        const value = math.randomInt(min, max + 1);
        return new Operand(value);
    }

    constructor(value) {
        this._value = value;
    }

    value() {
        return this._value;
    }
}