<template>
    <div>
        <ContentDoc />
    </div>
  <div class="main"> Main page
      <img src="@/assets/nuxt-is-cool.jpg" alt="" />
      <img src="/nuxt-space.jpg" alt="" />
      <IconsBell/>
      <div>{{ $saySimon('Simon') }}</div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: "auth",
});


const { sayHello } = useUtils();
sayHello();
// Plugin example instead of composable.
const { $saySimon } = useNuxtApp();
$saySimon('Simon');
</script>