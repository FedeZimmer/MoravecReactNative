import {compose, mapProps} from 'recompose';
import {hook} from 'cavy';
import Config from "react-native-config";

export function makeItTestable(componentIdentifier) {
    const isTest = Config.ENV === 'testing';

    if (isTest) {
        const includeCavyTestHookRef = mapProps(({generateTestHook, ...args}) => ({
            ...args,
            ref: generateTestHook(componentIdentifier)
        }));

        return compose(hook, includeCavyTestHookRef);
    } else {
        const doNothing = component => component;

        return doNothing;
    }
}