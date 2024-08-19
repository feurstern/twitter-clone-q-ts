import { ref } from 'vue';
import { rightDrawerListInterface, rightDrawerWhoIsToFollowInterface } from '../models';

export default () => {
    const rightDrawerListData = ref<rightDrawerListInterface[]>([
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

    const rightDrawerWhoIsToFollowData = ref<rightDrawerWhoIsToFollowInterface[]>([
        {
            accountName: 'CodeDesign_AI',
            accountId: 'CodeDesign_AI',
            image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png',
            isViP: false
        },
        {
            accountName: 'NSDAP AI',
            accountId: 'horstwesselliede',
            image: '',
            isViP: true
        },
        {
            accountName: 'FreeCodeCamp',
            accountId: 'freecodecamp',
            image: 'https://design-style-guide.freecodecamp.org/img/fcc_secondary_small.svg',
            isViP: true
        },
        {
            accountName: 'W3SCHOOL',
            accountId: 'w3_school',
            image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png',
            isViP: true
        }
    ])

    return {
        rightDrawerListData,
        rightDrawerWhoIsToFollowData
    }
}