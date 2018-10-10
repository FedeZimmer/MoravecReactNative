export const AGREE_TERMS = 'AGREE_TERMS';

export function agreeTerms() {
    return (dispatch) => {
        dispatch({
            type: AGREE_TERMS,
        });
    }
}
