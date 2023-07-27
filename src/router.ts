import { createBrowserRouter } from 'react-router-dom'
import { createElement, lazy } from 'react'
import withSuspense from './components/hoc/WithSuspense'

export default createBrowserRouter([
  {
    path: '/',
    element: createElement(
      withSuspense(lazy(() => import('./views/MainPage')))
    ),
  },
])
