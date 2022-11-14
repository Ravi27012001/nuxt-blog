<template><div>
     <div class="text-[30px] px-6 pt-7">Error 404:- Page Not Found</div>
    <button @click="handleError" class="text-blue-500 ml-7">Clear errors</button>
  </div>
  </template>
  <script setup>
  const props = defineProps({
    error: Object
  })
  const handleError = () => clearError({ redirect: '/' })
  </script>