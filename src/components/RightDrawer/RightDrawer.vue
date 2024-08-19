<script setup lang="ts">
import useRightDrawe from './RightDrawer';

const { rightDrawerListData, rightDrawerWhoIsToFollowData } = useRightDrawe();

</script>

<template>
    <q-input aria-placeholder="search trends" class="q-ma-md" outlined rounded dense />
    <q-card>
    <q-list separator padding>
        <q-item class="q-pa-md" v-for="(data, index) in rightDrawerListData" :key="index">
            <q-item-section>
                <q-item-label overline> {{
                    data.title }}</q-item-label>
                <q-item-label>{{ data.subTitle }}</q-item-label>
                <q-item-label caption> {{ data.caption }}</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
   </q-card>

   <q-card>
    <q-list bordered>
        <q-item v-for="(data,index) in rightDrawerWhoIsToFollowData" :key=index>
            <q-item-section avatar>
                <q-avatar>
                <img :src="`${data.image}`" />
                </q-avatar>
            </q-item-section> 

            <q-item-section>
                <q-item-label> {{data.accountName}}</q-item-label>
                <q-item-label> {{data.accountId}} </q-item-label>
            </q-item-section>
            
            <q-item-section side>
                <q-btn color="primary" class="text-white font-weight-bold">Follow</q-btn>
            </q-item-section>
        </q-item>
    </q-list>   
   </q-card>
</template>
