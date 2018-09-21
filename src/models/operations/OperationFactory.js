export class OperationFactory {
    static createRandom(category, probabilityThatOperationIsHidden) {
        const operationClass = category.operationClass();
        return operationClass.createRandom(category, probabilityThatOperationIsHidden);
    }
}