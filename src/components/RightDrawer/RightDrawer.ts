import { ref } from 'vue';
import { rightDrawerInterface } from '../models';

export default () => {
    const rightDrawerListData = ref<rightDrawerInterface[]>([
        {
            title: 'Technology',
            subTitle: 'Programming Language',
            caption: 'Tech otakus save the world of NSDAP'
        },

        {
            title: 'Foreign Language',
            subTitle: 'Polyglot',
            caption: 'Have you ever wonder how being polyglot is such a ease? Your mind is getting better when you are speaking more than one language'
        },

        {
            title: 'History',
            subTitle: 'The Forgotten of the Tale of NDSAP',
            caption: 'Tech otakus save the world of NSDAP'
        },

    ])

    return {
        rightDrawerListData
    }
}