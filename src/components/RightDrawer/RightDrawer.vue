<script setup lang="ts">
    import useRightDrawer from './RightDrawer';
    const { rightDrawerListData, rightDrawerWhoIsToFollowData } = useRightDrawer();
</script>

<template>
    <q-input modelValue="" placeholder="search trends" class="q-ma-md" outlined rounded dense />
    <q-card>
        <q-card-section>
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
      </q-card-section>
   </q-card>

   <q-card>
    <q-toolbar class="font-weight">
         <q-toolbar-title>Who is to Follow</q-toolbar-title>    
    </q-toolbar>
    <q-list bordered>
        <q-item v-for="(data,index) in rightDrawerWhoIsToFollowData" :key=index>
            <q-item-section avatar>
                <q-avatar>
                <img :src="`${data.image}`" />
                </q-avatar>
            </q-item-section> 

            <q-item-section>
                <div v-if="data.isViP">
                    <q-item-label> {{data.accountName}} <span><q-icon name="verified" color="primary" /></span> </q-item-label>
                </div>
                <div v-else>
                    <q-item-label>{{data.accountName}} </q-item-label>
                </div>
                <q-item-label> {{data.accountId}} </q-item-label>
                <q-icon class="material-symbols-outlined" />
            </q-item-section>
            
            <q-item-section side>
                <q-btn color="primary" class="text-white font-weight-bold">Follow</q-btn>
            </q-item-section>
        </q-item>
    </q-list>   
   </q-card>
</template>


<style scoped>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>


