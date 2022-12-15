
const FOLLOW='FOLLOW'
const UN_FOLLOW ='UN_FOLLOW'
const SET_USERS ='SET_USERS'


const initialState={
   users:[
      {id:1,folowed:true,fullName:'Dzmitry',status:'i live in Belarus',location:{country:'Belarus',city:'Brest'}},
      {id:1,folowed:true,fullName:'Sveta',status:'i live in Belarus',location:{country:'Belarus',city:'Minsk'}},
      {id:1,folowed:false,fullName:'Angelina',status:'i live in Belarus',location:{country:'Belarus',city:'Grodno'}},
      {id:1,folowed:true,fullName:'Lera',status:'i live in Belarus',location:{country:'Belarus',city:'Minsk'}},
   ]
}

export const usersReducer = (state=initialState,action) => {
  switch (action.type){
case FOLLOW:{
return{...state,users:state.users.map(u=>{
   if(u.id === action.userId){
      return{...u,followed:true}
   }
   return u
})}
}
case UN_FOLLOW:{
return{...state,users:state.users.map(u=>{
   if(u.id === action.userId){
      return{...u,followed:false}
   }
   return u
})}
}
case SET_USERS:{
   return{...state,users:[...action.users,...action.users]}
}


default:
   return state
  }
}



export const followAc=(userId)=>{
   return{
      type:FOLLOW,userId
   }
}

export const unFollowAc=(userId)=>{
   return{
      type:UN_FOLLOW,userId
   }
}

export const setUsersAc=(users)=>{
   return{
      type:SET_USERS,users
   }
}