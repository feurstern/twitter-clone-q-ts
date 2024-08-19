<script setup lang="ts">
import { ref, Ref } from 'vue';
const tab: Ref<string> = ref('Settings');
</script>

<template>
    <q-page>
        <q-card>
            <q-card-section>
                <q-section>
                    {{ tab }}
                </q-section>
            </q-card-section>
        </q-card>
    </q-page>
</template>
