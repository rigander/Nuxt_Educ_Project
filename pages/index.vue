<script setup lang="ts">
const counter = useCounter();
</script>

<template>
        <div id="main">
          Counter: {{ counter }}
          <button @click="counter++">+</button>
          <button @click="counter--">-</button>
        </div>
  <Counter id="counter" />
</template>




