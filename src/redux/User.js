import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userslist : [{id : 1, name : "Kvv"}]
}
export const userSlice = createSlice({
    name : "user",
    //name is must in createSlice
    initialState,
    reducers : {
        add : (state,action) => {
           state.userslist = [...state.userslist,{id : action.payload.id,name : action.payload.name}]
        },
        remove : (state,action) => {
           state.userslist = state.userslist.filter(u => u.id !==action.payload)
        },
        update : (state,action) => {
           state.userslist = state.userslist.map(u => {
            if(u.id === action.payload.id){
                u.name = action.payload.name;
                u.id = action.payload.id;
            }
            return u;
           })
        }
    }
})

export const {add,remove,update} = userSlice.actions
// this reduce refer to the function a.reducer()
export default userSlice.reducer

// watch nht channal