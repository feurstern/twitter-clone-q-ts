import { ref } from 'vue';

export default () => {

    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const toggleLeftDrawer = (): void => {
        leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const toggleRightDrawer = (): void => {
        rightDrawerOpen.value = !rightDrawerOpen.value
    }


    return {
        leftDrawerOpen,
        rightDrawerOpen,
        toggleLeftDrawer,
        toggleRightDrawer
    }
}