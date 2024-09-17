import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/detailsSlice'
import { getUsers } from '../store/userSlice'
import StatusCode from '../utils/StatusCode'
import Search from './Search'


const UsersList = () => {
    const dispatch=useDispatch()
    const {data: userList=[],status,searchTerm} = useSelector(state => state.users)


    useEffect(()=>{
        // dispatch an action for fetchUsers
        dispatch(getUsers())
        



        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(data => data.json())
        // .then(result => setUserList(result))

    },[dispatch])
    if(status === StatusCode.LOADING){
        return <p>Loading....</p>
    }

    if(status === StatusCode.ERROR){
        return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Something went wrong!</strong>
        <span className="block sm:inline"> Try again later.</span>
      </div>
      
    }

    // const addDetails = (user)=>{
    //     // dispatch an add action
    //     dispatch(add(user))
    // }

    const filteredUsers = userList.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase() || '')
      )

    const cards = filteredUsers.map((user)=>{
        return(
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" key={user.id}>
        <div className="max-w-xs rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-50 dark:text-gray-800 shadow-lg hover:bg-gray-100 transition">
	<img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{user.name}</h2>
			<p className="dark:text-gray-800">{user.email}</p>
            <p className="dark:text-gray-800">{user.company.name}</p>
		</div>
		<Link to={`/users/${user.id}`} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-emerald-600 dark:text-gray-50" fdprocessedid="fapf1">More details</Link>
	</div>
</div>
    </div>
        )
    })
  return (
    <div className='flex flex-col gap-8'>
        <h1 className='text-3xl font-bold mt-5'>USERS LIST</h1>
        <Search/>
        {/* {JSON.stringify(userList)} */}
        <div className="flex flex-wrap -mx-4">
        {cards}

        </div>
    </div>
  )
}

export default UsersList