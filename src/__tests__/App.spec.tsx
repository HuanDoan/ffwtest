import React from 'react'
import { waitFor } from '@testing-library/react'
import App from '../App'
import { renderWithProviders } from '../utils/utils-for-testing'

test('renders App component', async () => {
  const { getByTestId } = renderWithProviders(<App />)
  
  const appContainer = await waitFor(() => getByTestId('App Container'))
  expect(appContainer).toBeInTheDocument()

  const loadingContainer = await waitFor(() => getByTestId('Loading Indicator'))
  expect(loadingContainer).toBeInTheDocument()
});
