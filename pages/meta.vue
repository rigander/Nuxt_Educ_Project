<script setup lang="ts">
const title = ref("this is my dynamic title");
</script>

<template>
    <div>
        <Head>
            <Title>This is my title</Title>
            <Meta name="description" :content="title"/>
            <Style type="text/css" children="body { background-color: green; }"/>
        </Head>
        Homepage
    </div>
</template>