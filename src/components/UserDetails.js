import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserById, clearUserDetails } from '../store/userSlice'
import { useParams } from 'react-router-dom'
import StatusCode from '../utils/StatusCode'

const UserDetails = () => {

  const { id }=useParams()
  const dispatch=useDispatch()
  const { userDetails, status }=useSelector(state => state.users)

  useEffect(()=>{
    dispatch(getUserById(id))

    return ()=>{
      dispatch(clearUserDetails())
    }
  },[dispatch, id])

  if(status === StatusCode.LOADING){
    return <p>Loading....</p>
}

if(status === StatusCode.ERROR){
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Something went wrong!</strong>
    <span className="block sm:inline"> Try again later.</span>
  </div>
  
}

  
    return (
      <div>
          <div className="pt-5 px-6 dark:bg-[#C4B69D] min-h-screen w-screen">
        <h1 className="text-lg"><strong>Id:</strong> {userDetails.id}</h1>
        <h1 className="text-lg"><strong>Name:</strong> {userDetails.name}</h1>
        <h2 className="text-lg"><strong>Username:</strong> {userDetails.username}</h2>
        <p className="text-lg"><strong>Email:</strong> {userDetails.email}</p>
        {/* <p>Address: {address}</p> */}
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Address:</h3>
            <p>{userDetails.address?.street}, {userDetails.address?.suite}</p>
            <p>{userDetails.address?.city}, {userDetails.address?.zipcode}</p>
            <div>
                  <p>Latitude: {userDetails.address?.geo.lat}</p>
                  <p>Longitude: {userDetails.address?.geo.lng}</p>
                </div>
          </div>
  
  
        <p className="text-lg"><strong>Phone:</strong> {userDetails.phone}</p>
        <p className="text-lg"><strong>Website:</strong> {userDetails.website}</p>
        <div className="mt-4">
              <h3 className="text-lg font-semibold">Company:</h3>
              <p><strong>Name:</strong> {userDetails.company?.name}</p>
              <p><strong>Catchphrase:</strong> {userDetails.company?.catchPhrase}</p>
              <p><strong>BS:</strong> {userDetails.company?.bs}</p>
            </div>
        <div className="mt-10">
        <Link to="/" className="dark:bg-emerald-600 rounded-md px-4 py-2 text-white">Back to Homepage</Link>
        </div>
      </div>
      </div>
    )
  
 
}

export default UserDetails