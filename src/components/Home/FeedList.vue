<script setup lang="ts">
import useFeedList from './FeedList';
const { newsFeedDataList } = useFeedList();
</script>

<template>
  <q-card class="q-mt-lg" rounded bordered v-for="(x, i) in newsFeedDataList" :key="i">
    <q-card-section >
      <q-list  class="rounded-borders q-pa-md">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar>
              <img :src="`${x.userProfileImage}`" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">{{ x.username }}</q-item-label>
            <q-item-label caption lines="2">
              <span class="text-weight-bold">{{ x.userId }}</span>
              -- {{ x.caption }}
            </q-item-label>
          </q-item-section>

          <q-item-section side top>
            {{ x.datePosted }}
          </q-item-section>
        </q-item>
      </q-list>
      <div class="q-pa-md" v-if="x.image !== null">
        <q-item-section v-for="(img, index) in x.image">
          <img :src="`${img}`" />
        </q-item-section>
      </div>
    </q-card-section>
  </q-card>
</template>
