<script setup lang="ts">
import useRightDrawe from './RightDrawer';

const { rightDrawerListData } = useRightDrawe();

</script>

<template>
    <q-input aria-placeholder="search trends" class="q-ma-md" outlined rounded dense />
    <q-list bordered padding>
        <q-item v-for="(data, index) in rightDrawerListData" :key="index">
            <q-item-section>
                <q-item-label overline> {{
                    data.title }}</q-item-label>
                <q-item-label>{{ data.subTitle }}</q-item-label>
                <q-item-label caption> {{ data.caption }}</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>