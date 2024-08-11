import { listDrawerInterfacee } from '../models';
import { ref } from 'vue';

export default () => {

    const dataItemLeftListDrawe = ref<listDrawerInterfacee[]>([
        {
            iconName: 'home',
            sectionName: 'Home',
            path: '/'
        },

        {
            iconName: 'circle',
            sectionName: 'About',
            path: '/about'
        },
        {
            iconName: 'camera',
            sectionName: 'Notifications',
            path: '/notifications'
        },
        {
            iconName: 'draw',
            sectionName: 'Setting',
            path: '/setting'
        },
    ])


    return {
        dataItemLeftListDrawe
    }
}