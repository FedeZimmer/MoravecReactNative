import math from "mathjs";
import {OperationFactory} from "../operations/OperationFactory";


export class Level {
    constructor(number, categories, categoriesProbability) {
        this._number = number;
        this._categories = categories;
        this._categoriesProbability = categoriesProbability;
    }

    allPossibleOperations() {
        let operations = [];
        this._categories.forEach(category => {
            let newOperation = OperationFactory.createRandom(category);

            operations.push(newOperation);
        });

        return operations;
    }

    createRandomOperation() {
        const operations = this.allPossibleOperations();
        return math.pickRandom(operations, this._categoriesProbability);
    }
}