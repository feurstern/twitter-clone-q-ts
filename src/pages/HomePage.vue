<script setup lang="ts">
import { Component, defineAsyncComponent } from 'vue';


const homeSection: Component = defineAsyncComponent(() => import('../components/Home/HomeSection.vue'));
</script>

<template>
    <q-page class="q-pa-lg">
        <h4 class="font-weight-bold">
            Home
        </h4>
        <home-section />
    </q-page>
</template>