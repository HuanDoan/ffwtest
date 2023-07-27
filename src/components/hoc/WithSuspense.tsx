import React, { ComponentType, FC, Suspense } from 'react'

const WithSuspense = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const component: FC<P> = (props) => (
    <Suspense>
      <WrappedComponent {...props} />
    </Suspense>
  )

  return component
}

export default WithSuspense
