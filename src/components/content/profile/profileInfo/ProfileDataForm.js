import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveProfile } from "../../../../features/profile/profileSlice";

const ProfileDataForm = ({profile,setEditMode}) => {
const dispatch =useDispatch()


	const {
		register,
		handleSubmit,
	} = useForm({
   defaultValues:{
   aboutMe:profile.aboutMe,
   fullName:profile.fullName,
   lookingForAJob:true,
   lookingForAJobDescription:profile.lookingForAJobDescription,
   contacts:profile.contacts,
  }});

	const onSubmit = (data) =>{ 
 
dispatch(saveProfile(data))
      setEditMode()  
   };
	return (
		
			<form  onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor="">aboutMe</label>
				<input  {...register("aboutMe")} type="text" />
         	<label htmlFor="">fullName</label>
            <input {...register("fullName")} type="text" />
            <label htmlFor="">lookingForAJob</label>
            <input {...register("lookingForAJob")} type="checkbox"  />
            <label htmlFor="">lookingForAJobDescription</label>
            <textarea {...register("lookingForAJobDescription")} type="text"  />
            {Object.keys(profile.contacts).map(key=>{
            return ( 
            <div key={key.id}>
            <label htmlFor="">{key}</label>
            <input key={key} {...register("contacts."+key)} type="text" />
            </div>
            )
            })}
            
				<button >send</button> 
			</form>
		)
};

export default ProfileDataForm;
