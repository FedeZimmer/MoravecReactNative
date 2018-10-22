export function createRandomOperationFor(levelOrPracticeMode) {
    let operation = levelOrPracticeMode.createRandomOperation();

    // TODO
    // This mapping seems unnecessary. We could remove it and pass the
    // Operation object through the components instead.
    return {
        opType: operation.category(),
        operator: operation.operatorHumanRepresentation(),
        operand1: operation.leftOperand().value(),
        operand2: operation.rightOperand().value(),
        operation: operation.operationHumanRepresentation(),
        correctResult: operation.result(),
        maxSolveTime: operation.maxSolveTime(),
        hint: operation.hint(),
        shouldBeHidden: operation.shouldBeHidden()
    }
}