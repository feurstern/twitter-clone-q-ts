<script setup lang="ts">
import { Component, defineAsyncComponent } from 'vue';
import useMainLayout from './MainLayout';
// import { route } from 'quasar/wrappers';

const {
  leftDrawerOpen,
  rightDrawerOpen,
  toggleLeftDrawer,
  // toggleRightDrawer
} = useMainLayout();

const listLeftDrawer: Component = defineAsyncComponent(() => import('../components/LeftDrawer/ListLeftDrawer.vue'));
const listRightDrawer: Component = defineAsyncComponent(() => import('../components/RightDrawer/RightDrawer.vue'));
</script>

<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span classs="gt-sm">{{ $route.name }}</span>
          <q-icon class="q-pa-md lt-md absolute-center" name="book" size="sm" color="primary" flat />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>


    <q-drawer :width="280" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer
      <i class="fa-sharp  fa-regular fa-salad"></i> 
      content -->
      <q-icon class="q-pa-md" name="book" size="lg" color="primary" flat />
      <list-left-drawer />
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <list-right-drawer />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
