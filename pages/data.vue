<script setup>
const { pending, data: alldata } = useLazyFetch(
  //fetching API data with useLazyFetch methods
  "https://jsonplaceholder.typicode.com/todos"
);
watch(alldata, (newAlldata) => {});
console.log(alldata);
</script>
<template>
  <div>
    <div v-if="pending">Loading...</div> 
    <!-- page will show loading while fetch is in pending state -->
    <div v-else>
      <!-- rendering all the data seperately by using V-for -->
      <div
        v-for="items in alldata"
        :key="items.id"
        class="
          inline-grid
          grid-cols
          bg-slate-400
          m-2
          p-2
          mx-5
          text-[20px]
          capitalize
        "
      >
        <div class="flex flex-col text-center w-64">
          <span class="text-center">{{ items.id }}</span
          ><span class="text-center">{{ items.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>