import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  loading: boolean
}

const initAppState: AppState = {
  loading: false,
}

const AppSlice = createSlice({
  name: 'app',
  initialState: initAppState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const selectLoading = createSelector(
  (state: { app: AppState }) => state.app.loading,
  (loading) => loading
)

export const { setLoading } = AppSlice.actions

export default AppSlice.reducer
