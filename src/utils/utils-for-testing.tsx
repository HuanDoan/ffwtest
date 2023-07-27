import React from 'react'
import { render } from '@testing-library/react'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import appReducer from '../stores/app.slice'
import tabsReducer from '../stores/tabs.slice'

interface RenderWithProvidersOptions {
  preloadedState?: any
  store?: EnhancedStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { listReducers: appReducer, tabsReducer },
      preloadedState,
    }),
    ...renderOptions
  }: RenderWithProvidersOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
