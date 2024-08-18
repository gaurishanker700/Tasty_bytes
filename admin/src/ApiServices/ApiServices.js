import axios from "axios"
const BASE_URL="http://localhost:5000/admin/"
export const BASE_URL_IMG="http://localhost:5000/"
// const token=sessionStorage.getItem("token")
// const header={
//     Authorization:"application/json "+token
// }
class apiServices{
    // ---------------user Register Apis------------
    register(data){
        console.log(data)
        return axios.post(BASE_URL+"register",data)
    }
   
    // ---------------user Login Apis------------
    login(data){
      //   console.log(data)
        return axios.post(BASE_URL+"login",data)
    }

 

    adduser(data){
      const token = sessionStorage.getItem("token")
      console.log(token)
      console.log(data)
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      console.log(data)
      return axios.post(BASE_URL + "adduser",data,{headers:header})
   }



   
   updateuser(data) {
      const token = sessionStorage.getItem("token")
      console.log(token)
      const header = {
          Accept: "application/json",
          Authorization: sessionStorage.getItem("token")
      }
      
      return axios.post(BASE_URL + "updateuser", data, { headers: header })
   }
   

   changeStatus(data){
      const token = sessionStorage.getItem("token")
      console.log(token)
      console.log(data)
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      console.log(data)
      return axios.post(BASE_URL + "changeStatus",data,{headers:header})
   }
   
   getsinglecustomer(data){
      const token = sessionStorage.getItem("token")
      console.log(token)
      console.log(data)
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      console.log(data)
      return axios.post(BASE_URL + "getsinglecustomer",data,{headers:header})
   }
   
   getallcustomer(data){
      const token = sessionStorage.getItem("token")
      // console.log(token)
      // 
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      
      return axios.post(BASE_URL + "getallcustomer",data,{headers:header})
   }

   getalluser(data){
      const token = sessionStorage.getItem("token")
      // console.log(token)
      // 
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      
      return axios.post(BASE_URL + "getalluser",data,{headers:header})
   }
   
   
   
   getsingleuser(data){
      const token = sessionStorage.getItem("token")
      console.log(token)
      
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      
      return axios.post(BASE_URL + "getsingleuser",data,{headers:header})
   }
   
   
   deletecustomer(data){
      const token = sessionStorage.getItem("token")
      console.log(token)
      
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      
      return axios.post(BASE_URL + "deletecustomer",data,{headers:header})
   }
   
   
    
   //  ================product Api===============================   
   addProduct(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"add-Product", data, { headers: header })
   }
   
   getallProduct(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"getallProduct", data, { headers: header })
   }
   
   getsingleProduct(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"getsingle-Product", data, { headers: header })
   }
   
   updateProductStatus(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"update-Product-Status", data, { headers: header })
   }

   updateProduct(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"updateProduct", data, { headers: header })
   }
   deleteProduct(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"delete-Product", data, { headers: header })
   }
       
   
   // =========Review Apis============
   getallReview(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"get-all-Review", data, { headers: header })
   }
   
   deleteReview(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"delete-Review", data, { headers: header })
   }
   
   updateReviewStatus(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"update-Review-Status", data, { headers: header })
   }
   addReview(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"addReview", data, { headers: header })
   }

   getReviewsByProduct(data) {
      const token = sessionStorage.getItem("token")
      const header = {
         Accept: "application/json",
         Authorization: token
      }
      return axios.post(BASE_URL +"getReviewsByProduct", data, { headers: header })
   }
       
   
   // ======================Contact api===============================
   contact(data) {
      return axios.post(BASE_URL + "contact", data)
   }
   
   getallcontacts(data) {
      const token = sessionStorage.getItem("token")
      const header = {
          Accept: "application/json",
          Authorization: token
      }
      return axios.post(BASE_URL + "get-all-contacts", data, { headers: header })
   }
   
   deleteContact(data) {
      const token = sessionStorage.getItem("token")
      console.log(token)
      const header = {
          Accept: "application/json",
          Authorization: token
      }
      
      return axios.post(BASE_URL + "deleteContact", data, { headers: header })
   }

   latestContact(data) {
      const token = sessionStorage.getItem("token")
      console.log(token)
      const header = {
          Accept: "application/json",
          Authorization: token
      }
      
      return axios.post(BASE_URL + "latestContact", data, { headers: header })
   }
   
   // ======================Contact api===============================
   
// ==============testimonial api start=================
addTestimonial(data) {
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   
   return axios.post(BASE_URL + "addTestimonial", data, { headers: header })
}
getallTestimonial(data) {
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   
   return axios.post(BASE_URL + "getallTestimonial", data, { headers: header })
}
getsingleTestimonial(data) {
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   
   return axios.post(BASE_URL + "getsingleTestimonial", data, { headers: header })
}

updateTestimonial(data) {
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   
   return axios.post(BASE_URL + "updateTestimonial", data, { headers: header })
}
updatetestimonialStatus(data) {
   const token = sessionStorage.getItem("token")
   console.log(token)
   const header = {
       Accept: "application/json",
       Authorization: sessionStorage.getItem("token")
   }
   
   return axios.post(BASE_URL + "updatetestimonialStatus", data, { headers: header })
}
// ==============testimonial api end=================

}

export default new apiServices()