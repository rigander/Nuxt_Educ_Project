<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
    <div id="main">
        Counter: {{ counter }}
        <button @click="counter++">
            +
        </button>
        <button @click="counter--">
            -
        </button>
    </div>
</template>