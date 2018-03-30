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
        for (let category of this._categories){
            let newOperation = OperationFactory.createRandom(category);

            operations.push(newOperation);
        }

        return operations;
    }

    createOperation() {
        const operations = this.allPossibleOperations();
        return math.pickRandom(operations, this._categoriesProbability);
    }
}