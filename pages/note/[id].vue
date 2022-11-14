<!-- Dynamic page -->
<template> 
<div class="text-center">
  <!-- getting dynamic id by $route.params.id -->
    <h1>Dynamic Page{{$route.params.id}}</h1>
    <div class="bg-stone-300 w-1/3 m-auto rounded-md p-2">
        <div class="text-rose-600 font-serif">
          <!-- Once i get the dynamic id we can find noteheading in lii list -->
          Note No - <span class="text-blue-600">{{ parseInt($route.params.id.toString())+1}}</span>
        </div>
        <div class="text-rose-600">
            <!-- Once i get the dynamic id we can find noteheading in lii list -->
          Heading - <span class="text-blue-600"> {{lii[parseInt(route.params.id.toString())].NoteHeading}}</span>
        </div>
        <div class="">{{ lii[parseInt(route.params.id.toString())].NoteContent}}</div>
    </div>
    </div>
</template>

<script setup lang="ts">

import { useDataStore } from "./useStore";
const store = useDataStore();   
const route =useRoute()
const lii = store.getMyData;
console.log(lii[parseInt(route.params.id.toString())])
 
   

</script>
