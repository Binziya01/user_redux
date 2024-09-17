import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import UsersList from './UsersList'


const RootLayout = () => {
  return (
    <div>
       <Provider store={store}>
      
        <main>
            <Outlet/>
        </main>
       </Provider>
       
    </div>
  )
}

export default RootLayout