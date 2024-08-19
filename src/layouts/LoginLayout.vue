<script setup lang="ts">
    import { Component, defineAsyncComponent } from 'vue';
    const loginPage : Component = defineAsyncComponent(()=> import('../components/Login/LoginPage.vue'));    
</script>

<template>
    <div>
        <login-page />
    </div>
</template>