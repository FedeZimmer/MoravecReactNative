const ENTER_KEY_CODE = 20;
const ERASE_KEY_CODE = -1;

const MAX_NUMBER_OF_DIGITS = 8;

function appendNewUserInput(currentInput, newInput) {
    if (!currentInput) {
        return newInput;
    }

    const exceedsMaxNumberOfDigits = currentInput.toString().length >= MAX_NUMBER_OF_DIGITS;
    if (exceedsMaxNumberOfDigits) {
        return currentInput;
    } else {
        return Number('' + currentInput + newInput);
    }
}

function removeLastNumberEntered(currentInput) {
    if (currentInput === null) {
        return currentInput;
    }

    let inputWithoutLastNumberEntered = String(currentInput).slice(0, -1);
    if (inputWithoutLastNumberEntered === "") {
        inputWithoutLastNumberEntered = null;
    }
    return inputWithoutLastNumberEntered;
}

function addResponseTime(responseTimesUntilNow, startTime, inputTime) {
    const responseTime = inputTime - startTime;
    return responseTimesUntilNow.concat(responseTime);
}

export function updatedTrialAfterNewInput(currentTrial, newUserInput, inputTime) {
    return {
        ...currentTrial,
        currentUserInput: appendNewUserInput(currentTrial.currentUserInput, newUserInput),
        keysPressed: currentTrial.keysPressed.concat(newUserInput),
        responseTimes: addResponseTime(currentTrial.responseTimes, currentTrial.startTime,
            inputTime),
    }
}

export function updatedTrialAfterErase(currentTrial, inputTime) {
    return {
        ...currentTrial,
        currentUserInput: removeLastNumberEntered(currentTrial.currentUserInput),
        keysPressed: currentTrial.keysPressed.concat(ERASE_KEY_CODE),
        responseTimes: addResponseTime(currentTrial.responseTimes, currentTrial.startTime,
            inputTime),
        hasErased: true,
    }
}

export function isAnswerCorrect(correctResult, currentUserInput) {
    return correctResult === currentUserInput;
}

export function calculateTotalTrialTime(trialStartTime, trialSubmitTime) {
    return trialSubmitTime - trialStartTime;
}

export function hasExceededMaxSolveTime(trialStartTime, trialSubmitTime, operationMaxSolveTime) {
    return calculateTotalTrialTime(trialStartTime, trialSubmitTime) > operationMaxSolveTime;
}

export function updatedLastAnswerData(currentTrial, isCorrect, exceededMaxSolveTime) {
    return {
        userInput: currentTrial.currentUserInput,
        correctResult: currentTrial.operation.correctResult,
        isCorrect: isCorrect,
        timeExceeded: exceededMaxSolveTime,
    }
}

export function updatedTrialAfterSubmit(currentTrial, submitTime, isCorrect, exceededMaxSolveTime, sessionInfo) {
    return {
        ...currentTrial,
        keysPressed: currentTrial.keysPressed.concat(ENTER_KEY_CODE),
        responseTimes: addResponseTime(currentTrial.responseTimes, currentTrial.startTime,
            submitTime),
        submitTime: submitTime,
        totalTime: calculateTotalTrialTime(currentTrial.startTime, submitTime),
        timeExceeded: exceededMaxSolveTime,
        isCorrect: isCorrect,
        trialNumber: sessionInfo.currentTrialNumber,
        totalCorrectUntilNow: isCorrect ? sessionInfo.totalCorrect + 1 : sessionInfo.totalCorrect,
        correctInARowUntilNow: isCorrect ? sessionInfo.lastCorrectInARowValue + 1 : 0,
    }
}

function updateTrialsProgress(progressUpToNow, currentIsCorrect, timeExceeded) {
    let newTrialNumber = progressUpToNow;
    if (currentIsCorrect) {
        if (!timeExceeded) {
            newTrialNumber += 1;
        }
    } else {
        newTrialNumber += 1;
    }

    return newTrialNumber;
}

export function initilizeSessionInfo() {
    return {
        currentTrialNumber: 1,
        totalCorrect: 0,
        lastCorrectInARowValue: 0,
    };
}

export function updatedSessionInfoAfterTrialSubmit(sessionInfo, isCorrect, exceededMaxSolveTime, totalCorrect) {
    return {
        currentTrialNumber: updateTrialsProgress(sessionInfo.currentTrialNumber, isCorrect, exceededMaxSolveTime),
        totalCorrect: totalCorrect,
        lastCorrectInARowValue: isCorrect ? sessionInfo.lastCorrectInARowValue + 1 : 0,
    }
}

export function updateTotalCorrect(isAnswerCorrect, previousTotalCorrectValue) {
    return isAnswerCorrect
        ? previousTotalCorrectValue + 1
        : previousTotalCorrectValue;
}