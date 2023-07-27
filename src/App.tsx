import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import Loading from './components/common/Loading'

function App() {
  return (
    <div className="w-full min-h-screen h-auto bg-gray-100">
      <div className="container mx-auto">
        <RouterProvider router={router} />
      </div>
      <Loading />
    </div>
  )
}

export default App
