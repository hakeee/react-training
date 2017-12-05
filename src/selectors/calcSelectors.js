import { createSelector } from 'reselect';

const sumSelector = state => state.sum;
const inputSelector = state => state.input;

export const getAvg = createSelector(
    sumSelector,
    inputSelector,
    (sum, input) => ({value: (sum + (input || 0)) / 2 })
)

export const getSum = createSelector(
    sumSelector,
    inputSelector,
    (sum, input) => ({value: sum+(input || 0)})
)
