<script setup lang="ts">
const response = await $fetch('/api/hello');
console.log(response);
import { useCounterStore } from "../stores/myStore";
const store = useCounterStore();
console.log(store);
const counter = useCounter();

// const { data: products, pending } = await useFetch('/api/products');
// console.log(toRaw(products.value));

const { data: products, pending } = await useLazyFetch('/api/products');
console.log(toRaw(products.value));
</script>

<template>
        <div id="main">
          Counter: {{ counter }}
          <button @click="counter++">+</button>
          <button @click="counter--">-</button>
        </div>
  <Counter id="counter" />
  <p>{{ products }}</p>
</template>




