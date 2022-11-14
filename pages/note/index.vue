<!-- First Page for adding notes -->
<template>
  <div class="text-center"  >
    <h1 class="text-[30px] text-slate-700 underline">Add Your Note here</h1>
    <div class="flex justify-center my-5">
      <span class="self-center mr-1 text-[25px] font-serif font-bold">
        Note Heading
      </span>
      <span
        ><input
          type="text"
          class="border-2 w-72 text-[25px] p-2 border-black"
          name=""
          id=""
          v-model="NoteHeading"
        /><br />
      </span>
    </div>
    <div class="flex justify-center">
      <span class="self-center mr-2 text-[25px] font-serif font-bold">
        Note Content
      </span>
      <span>
        <textarea
          name=""
          id=""
          class="border-2 border-black w-72 p-2 text-[25px] font-sans"
          cols="30"
          rows="3"
          v-model = NoteContent
        ></textarea>
      </span>
    </div>
    <button class="mt-4 bg-red-700 p-2 rounded-md text-white hover:bg-red-500" @click="Submitt">
      Submit
    </button>
<br/>
<!-- Button to navigate on List page where u can see all note -->
    <nuxt-link to="/note/list" class=" text-blue-700 absolute right-8 top-24"> Show list</nuxt-link>
    
  </div>
</template>

<script setup lang="ts">
import {useDataStore} from './useStore' ; 
//  import {onMounted} from "vue";
let idd = ref<number>(2);
let NoteHeading = ref<string>("");
let NoteContent = ref<string>("");
const store=useDataStore() //getting data from my store

let NoteData = ref<{id:number,NoteHeading:string,NoteContent:string}[]>([
  
 ]); 

 function Submitt(){ //SubmitHandler
  if(NoteHeading.value.length == 0 || NoteContent.value.length == 0){  //If input is empty alert
    alert("fill the data")
}
else{
  NoteData.value.push({id:idd.value++,NoteHeading:NoteHeading.value,NoteContent:NoteContent.value}); //else push the object in array
  console.log(NoteData.value)
  store.setMyData(NoteData.value)
  console.log(store.getMyData);
  alert("Note is Submitted")
  NoteHeading.value = "";
  NoteContent.value = "";
  
}
}

console.log(NoteData);
</script>
<style>
</style>