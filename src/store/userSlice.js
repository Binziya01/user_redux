import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import StatusCode from '../utils/StatusCode'

const initialState = {
    data:[],
    userDetails:{},
    status: StatusCode.IDLE,
    searchTerm: ''
}
const userSlice = createSlice({
    name : 'users',
    initialState,
    

    reducers:{
        // fetchUsers(state,action){
        //     state.data=action.payload

        // },
        setSearchTerm: (state,action) =>{
            state.searchTerm = action.payload
        },
        clearUserDetails: (state) => {
            state.userDetails = {}
        }
        
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getUsers.pending, (state,action)=>{
            state.status=StatusCode.LOADING
        })
        .addCase(getUsers.fulfilled, (state,action)=>{
            state.data=action.payload
            state.status=StatusCode.IDLE

        })
        .addCase(getUsers.rejected, (state,action)=>{
            state.status=StatusCode.ERROR
        })
        .addCase(getUserById.pending, (state,action)=>{
            state.status=StatusCode.LOADING
        })
        .addCase(getUserById.fulfilled, (state,action)=>{
            state.data=action.payload
            state.status=StatusCode.IDLE

        })
        .addCase(getUserById.rejected, (state,action)=>{
            state.status=StatusCode.ERROR
        })

    }
})

export const {setSearchTerm, clearUserDetails}=userSlice.actions
export default userSlice.reducer

export const getUsers = createAsyncThunk('users/get', async ()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await data.json()
        return result

})

export const getUserById = createAsyncThunk('users/getUserById', async (id) =>{
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const result = await data.json()
    return result
})

// export function getUsers(){
//     return async function getUsersThunk(dispatch,getState){
//        const data = await fetch('https://jsonplaceholder.typicode.com/users')
//         const result = await data.json()
//         dispatch(fetchUsers(result))
//     }
// }