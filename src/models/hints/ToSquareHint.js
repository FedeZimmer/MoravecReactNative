import {PositionalDecomposition} from "./PositionalDecomposition";
import {OperationHint} from "./OperationHint";
import exponent from "superscript-number";


export class ToSquareHint extends OperationHint {
    static of(toSquareOperation) {
        return new ToSquareHint(toSquareOperation);
    }

    /**
     * Decomposes a number 'x' using the following formula x^2 = (x-a)(x+a) + a^2.
     * See _valueOfA() to see how 'a' is calculated.
     * @param x
     * @returns {string}
     * @private
     */
    _decompositionOf(x) {
        if (x >= 10) {
            const a = this._valueOfA(x);
            return `(${x}-${a}) x (${x}+${a}) + ${a}${exponent(2)}`
        } else {
            return `${x}${exponent(2)}`;
        }
    }

    /**
     * Given a number 'x' and another number 'a' returns string "AxB"
     * where A = (x-a) and B = (x+b).
     * @param x
     * @param a
     * @returns {string}
     * @private
     */
    _reductionOf(x, a) {
        const xPlusA = x + a;
        const xMinusA = x - a;

        return `(${xMinusA}x${xPlusA})`;
    }

    _valueOfA(number) {
        if (number < 10) {
            throw "Number should have at least two digits"
        }
        const positionalDecomposition = PositionalDecomposition.of(number).getDecomposition();
        const leftMostSignificantFigure = positionalDecomposition[0];
        const numberWithoutFirstDigit = number - leftMostSignificantFigure;

        const numberOfDigits = positionalDecomposition.length;
        const baseOfRemaining = Math.pow(10, numberOfDigits - 1);
        if (numberWithoutFirstDigit > baseOfRemaining / 2) {
            return baseOfRemaining - numberWithoutFirstDigit;
        } else {
            return numberWithoutFirstDigit;
        }
    }

    getHint() {
        let numberToSquare = this.operation().leftOperand().value();

        let steps = [];
        const zeroStep = "x" + exponent(2) + " = (x-a)(x+a) + a" + exponent(2);
        steps.push(zeroStep);

        const firstStep = `${this._decompositionOf(numberToSquare)}`;
        steps.push(firstStep);

        let valueOfA = this._valueOfA(numberToSquare);
        const reduction = this._reductionOf(numberToSquare, valueOfA);
        let reductions = `${reduction}`;

        numberToSquare = valueOfA;
        const step = `${reductions} + ${this._decompositionOf(numberToSquare)}`;
        steps.push(step);

        while (numberToSquare >= 10) {
            valueOfA = this._valueOfA(numberToSquare);
            const reduction = this._reductionOf(numberToSquare, valueOfA);
            reductions += ` + ${reduction}`;

            numberToSquare = valueOfA;
            const step = `${reductions} + ${this._decompositionOf(numberToSquare)}`;
            steps.push(step);
        }

        return steps;
    }
}