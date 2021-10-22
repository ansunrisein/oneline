/* eslint-disable */
import React from 'react'
import {useRedirect, useRoutes} from 'hookrouter'
import {Catalog, Me, Search} from './features/book/pages'
import {Login} from './features/user/pages'
import {News} from './features/common/pages'
import {Header} from './features/common/components'


const routes = {
  '/library': () => <Catalog />,
  '/login': () => <Login />,
  '/news': () => <News />,
  '/search': () => <Search />,
  '/me': () => <Me />,
}

export const App: React.FC = () => {
  const routeResult = useRoutes(routes)
  useRedirect('/', '/library')

  return (
    <React.StrictMode>
      <Header />
      {routeResult || <span>Not Found</span>}
    </React.StrictMode>
  )
}
