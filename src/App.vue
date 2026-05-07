<template>
  <header class="bg-blue-700 text-white p-4 shadow">
    <div class="container mx-auto flex justify-between items-center">
      <RouterLink to="/" class="text-xl font-bold flex items-center gap-2 text-white"
        >🇧🇩 BD Govt Jobs</RouterLink
      >
      <nav class="flex gap-4">
        <RouterLink to="/" class="hover:underline">হোম</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="bg-gray-100 text-center p-4 text-sm text-gray-500 mt-8 border-t">
    © {{ new Date().getFullYear() }} BD Govt Jobs Portal. শুধুমাত্র তথ্যের উদ্দেশ্যে।
  </footer>
</template>

<script setup lang="ts">
// RouterLink and RouterView are auto-registered by vue-router
// No imports needed here
</script>
