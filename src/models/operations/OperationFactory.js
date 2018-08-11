export class OperationFactory {
    static createRandom(category) {
        const operationClass = category.operationClass();
        return operationClass.createRandom(category);
    }
}