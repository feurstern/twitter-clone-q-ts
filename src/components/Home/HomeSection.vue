<script setup lang="ts">
import useHomeSection from './HomeSection';
const { text, submitPostData } = useHomeSection();
</script>

<template>
    <div class="q-py-lg q-px-md">
        <q-input bottom-slots v-model="text" placeholder="What's happening now?" counter maxlength="280" dense>
            <template v-slot:before>
                <q-avatar>
                    <img class=""
                        src="https://ih1.redbubble.net/image.3051250893.7844/raf,360x360,075,t,fafafa:ca443f4786.jpg">
                </q-avatar>
            </template>

            <template v-slot:append>
                <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon name="schedule" />
            </template>

            <template v-slot:hint>
            </template>
            <template v-slot:after>
                <q-btn @click="submitPostData" round dense flat icon="send" />
            </template>
        </q-input>
    </div>
</template>