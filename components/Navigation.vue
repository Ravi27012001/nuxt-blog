<!-- Code for Navigation Route -->
<template>
  <div class="bodyy box-border">
    <nav class="flex">
      <ul
        class="
          inline-flex
          flex-col
          text-center
          pt-5
          shadow-2xl
          bg-slate-200
          text-red-500
          nav
        "
      >
        <div class="w-48 text-center">
          <li class="pt-3">
            <!-- defining nuxt links us -->
            <NuxtLink class="active:text-red-600 hover:text-red-700" to="/"
              >Home</NuxtLink
            >
          </li>
          <li class="pt-3">
            <NuxtLink class="hover:text-red-700" to="/data">Dashboard</NuxtLink>
          </li>
          <li class="pt-3">
            <NuxtLink class="hover:text-red-700" to="/note/">Note</NuxtLink>
          </li>
        </div>
      </ul>
<ul class=" w-full text-center">
      <NuxtPage class="p-5 text-center" />
</ul>
    </nav>
  </div>
</template>
<style>
.bodyy {
  min-height: 82.2vh;
  width: 100%;
}
.nav{
  min-height:82.2vh;

}
 
</style>