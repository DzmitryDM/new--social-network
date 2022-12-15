import { createSlice } from "@reduxjs/toolkit";



const messagesSlice = createSlice({
   name:'messages',
   initialState:{
dialogsUser: [
         { id: 1, name: 'Katya' },
         { id: 2, name: 'Alisa'},
         { id: 3, name: 'Lera' },
         { id: 4, name: 'Veron' },
         { id: 5, name: 'Angelina' },
      ],

      dialogsMessages: [
         { id: 1, message: 'Hello' },
         { id: 2, message: 'Yes' },
         { id: 3, message: 'No' },
         { id: 4, message: 'Hi' },
         { id: 5, message: 'Go' },
      ],
      nameUsers: 'Dimas',
   },
   reducers:{
      updateNewPostActionCreator:(state,action)=>{
           let newPostUsers ={
         id:6,
         message: action.payload
      }
     state.dialogsMessages.push(newPostUsers)
      },



      onPostNameAc:(state,action)=>{
                  let userName={
            id:6,
            name:state.nameUsers
         }
     state.dialogsUser.push(userName)
      }
   },
})



export const {updateNewPostActionCreator,updateNewChangeActionCreator,onPostNameAc} = messagesSlice.actions


export default messagesSlice.reducer