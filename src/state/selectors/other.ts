import { createSelector } from 'reselect'


import { IRootState, ILogginStatus } from '@/state/types'
const stateSelector = (state: IRootState) => (state)

export const isAutoPlaySelector = createSelector(stateSelector, ({ isAutoPlay }) => isAutoPlay)
export const playlistSelector = createSelector(stateSelector, ({ playlist }) => playlist)
export const currentMediaSelector = createSelector(stateSelector, (state) => state.currentMedia)
export const tranlationUlrsSelector = createSelector(stateSelector, (state) => state.translatedUrls)
export const infobarSelector = createSelector(stateSelector, (state) => state.infobar)
