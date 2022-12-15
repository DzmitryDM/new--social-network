const ADD_POST='ADD_POST'
const UPDATE_POST='UPDATE_POST'
const NEW_POST_MESSAGE = 'NEW_POST_MESSAGE';
const ON_POST_CHANGE = 'ON_POST_CHANGE';
const ON_POST_NAME = 'ON_POST_NAME';


const initialState={

	dialog: [
		{ id: 1, message: "How are your" },
		{ id: 2, message: "How old are you" },
		{ id: 3, message: "Please up" },
		{ id: 4, message: "How are your" },
	],
	newPost: "",   
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
      newPostMessageUsers: '',
      nameUsers: 'Dimas',

   }



export const postReducer = (state=initialState,action) => {
  switch(action.type){
case ADD_POST:{

   let newPostMessages={
id:5,
message:state.newPost,
   }
      return{...state,dialog:[...state.dialog,newPostMessages],
      newPost: ''
      }


}
case UPDATE_POST:{
   return{...state,newPost:action.payload}
}
   default:
      return state
    

      
      case NEW_POST_MESSAGE :{
      let newPostUsers ={
         id:6,
         message: state.newPostMessageUsers,
      }
      return{...state,dialogsMessages:[...state.dialogsMessages,newPostUsers],
      newPostMessageUsers:''
   }
      
}

   
      case ON_POST_CHANGE:{
     return{...state,newPostMessageUsers:action.payload}
}

      case ON_POST_NAME:{
         let userName={
            id:6,
            name:state.nameUsers
         }
     return{...state,dialogsUser:[...state.dialogsUser,userName]}
}

  }

  
}


export const addPostActionCreator = () => {
  return{
   type:ADD_POST
  }
}

export const updatePostActionCreator = (text) => {
  return{
   type:UPDATE_POST,payload:text
  }
}





export const updateNewPostActionCreator = ()=>{
 
   return{
      type:NEW_POST_MESSAGE
   }
}
export const updateNewChangeActionCreator = (texts)=>{
 
   return{
      type:ON_POST_CHANGE,payload: texts
   }
}

export const onPostNameAc = ()=>{
 
   return{
      type:ON_POST_NAME
   }
}
