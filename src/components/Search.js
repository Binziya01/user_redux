import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../store/userSlice'

const Search = () => {
  const dispatch=useDispatch()

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }
  return (
    <div>
        <form>
            <input onChange={handleSearch} type="text" placeholder='search here' className="bg-gray-700 text-white border-none outline-none px-6 tracking-wider rounded-md py-2 w-[400px]" />
        </form>
    </div>
  )
}

export default Search