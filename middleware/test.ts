
   import { useDataStore } from "../pages/note/useStore";

export default defineNuxtRouteMiddleware((to,form)=>{
   console.log("i am coming from middleware");
   const store = useDataStore(); //import data from store
   const li = store.getMyData;
   if(li.length == 0){
      return navigateTo('/note/')
   }
})
 