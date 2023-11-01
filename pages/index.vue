<script setup lang="ts">
const response = await $fetch('/api/hello');
console.log(response);
import { useCounterStore } from "../stores/myStore";
const store = useCounterStore();
console.log(store);

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




