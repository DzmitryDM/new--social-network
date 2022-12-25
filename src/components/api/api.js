import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});




export const profileAPI = {
   
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
        
    }
}

export const securityAPI={
getCaptchaUrll(){
return instance.get('security/get-captcha-url')
}

}


//export const securityAPI = {
  //  getCaptchaUrl() {
  //      return instance.get(`security/get-captcha-url`).then(res => res.data);
   // }
//}