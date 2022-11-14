<template>
  <div>
    <h1>Show List Here</h1>
    <div class="flex w-4/5 border-2 justify-center m-auto flex-wrap">
      <!-- sending id on click of list to make it dynamic -->
      <nuxt-link
        :to="'/note/' + item.id"
        v-for="item in li"
        :key="item"
        class="bg-slate-400 m-3 w-52 h-fit rounded-md p-2"
      >
 
          <div class="text-rose-600 font-serif">
            Note No - <span class="text-blue-600">{{ item.id + 1 }}</span>
          </div>
          <div class="text-rose-600">
            Heading - <span class="text-blue-600"> {{ item.NoteHeading }}</span>
       
          <div class="text-black">{{ item.NoteContent }}</div>
        </div>
      </nuxt-link>
    </div>

    <nuxt-link to="/note/" class="text-blue-500 absolute top-20 left-60"
      >back</nuxt-link
    >
  </div>
</template>
<script setup lang="ts">
import { useDataStore } from "./useStore";
const store = useDataStore(); //import data from store
const li = store.getMyData;

definePageMeta({
  middleware:"test",
})
onMounted(() => {
  console.log(li[1]);
});
</script>