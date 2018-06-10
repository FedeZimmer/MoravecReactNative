/**
 * A positional decomposition is a way to descompose a natural number in
 * thousand, hundreds, ten, etc.
 * E.g. The decomposition of 852 is: [800, 50, 2]
 */
export class PositionalDecomposition {
    static of(number) {
        return new PositionalDecomposition(number);
    }

    constructor(number) {
        this._number = number;
    }

    getDecomposition() {
        const operandAsString = this._number.toString();
        let digits = [];
        let positionBase = operandAsString.length - 1;
        for (let numberChar of operandAsString) {
            digits.push(parseInt(numberChar) * Math.pow(10, positionBase));
            positionBase--;
        }
        return digits;
    }
}