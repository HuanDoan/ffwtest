import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import tabService from '../services/tab.service'

export interface TabState {
  tabs: Array<TabType>
  tabActive: TabType
  tabContent: ResponseData
}

const initialState: TabState = {
  tabs: [],
  tabActive: {} as TabType,
  tabContent: {} as ResponseData,
}

export const fetchTabs = createAsyncThunk('tabs/fetch', async () => {
  return tabService.fetch()
})

export const fetchTabContents = createAsyncThunk(
  'tabs/fetchTabContents',
  async (path: string) => {
    return tabService.get(path)
  }
)

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setTabs: (state, action: PayloadAction<Array<TabType>>) => {
      state.tabs = action.payload
    },
    activate: (state, action: PayloadAction<TabType>) => {
      state.tabActive = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTabs.fulfilled, (state, action) => {
      state.tabs = action.payload
      const [activeTab] = state.tabs
      state.tabActive = activeTab
    })
    builder.addCase(fetchTabContents.fulfilled, (state, action) => {
      state.tabContent = action.payload
    })
  },
})

export const selectTabActive = createSelector(
  (state: { tabs: TabState }) => state.tabs.tabActive,
  (tabActive) => tabActive
)

export const selectTabContent = createSelector(
  (state: { tabs: TabState }) => state.tabs.tabContent,
  (tabContent) => tabContent
)

export const { setTabs, activate } = tabsSlice.actions
export default tabsSlice.reducer
