
<template>
    <div class="text-center">
      <p class="text-red-400 text-[32px]  font-extralight font ml-4">
        This is home Page.
      </p>
      <div>
        Welcome to the Nuxt Project.
      </div>
      <h1 class="font-bold text-3xl p-5">{{ a }}</h1>
      <button
        class="
          bg-slate-500
          hover:bg-slate-400
          text-[32px]
          border-8 border-lime-800
          p-1
        "
        @click="increase"
      >
        Increase by 5
      </button>
    </div>
  </template>
  
  
  <script setup lang="ts">
   
   
  let a = ref<number>(0);
  function increase() {  //function for increment the value of a by 5 on each click.
    a.value = a.value + 5; 
  }
   
  </script>