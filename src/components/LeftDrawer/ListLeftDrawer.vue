<script setup lang="ts">
import useListLeftDrawer from './ListLeftDrawer';
const { dataItemLeftListDrawe } = useListLeftDrawer();

</script>


<template>
  <q-list>
    <q-item v-for="(data, index) in dataItemLeftListDrawe" :to="data.path" v-ripple :key="index">
      <q-item-section avatar v-if="data.path !== null">
        <q-icon :name="data.iconName" />
      </q-item-section>
      <q-item-section class="text-h6 text-weight-bold">{{ data.sectionName }}</q-item-section>
    </q-item>
  </q-list>
</template>