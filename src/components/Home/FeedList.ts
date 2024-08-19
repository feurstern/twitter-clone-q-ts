import { newsFeedInterface } from '../models';
import { ref } from 'vue';


export default () => {

    ///
    const newsFeedDataList = ref<newsFeedInterface[]>([
        {
            username: 'Hatsune Miku',
            userId: 'miku-miku_shite-ageru',
            userProfileImage: 'https://ih1.redbubble.net/image.3051250893.7844/raf,360x360,075,t,fafafa:ca443f4786.jpg',
            caption: 'Today was fantastic! I am so excited to meet my new fan in New Zealand',
            datePosted: '23 November 2024',
        },
        {
            username: 'Tech Otaku Save the World!',
            userId: 'mihoyo',
            userProfileImage: 'https://avatars.githubusercontent.com/u/60057220?s=400&u=f18919e2591ed2a7797661882083f8cf505ac3d1&v=4',
            caption: 'I remember when I was a freshman of programmer, and I am unable to do such a task that required higher knowledge in programming language and I failed so many times',
            image: ['https://miro.medium.com/v2/resize:fit:720/format:webp/1*tZKb3rGxaatEN9ovIqSzlg.png'],
            datePosted: '25 November 2024',
        },
        // {
        //     username: '',
        //     userId: '',
        //     userProfileImage: 'https://avatars.githubusercontent.com/u/60057220?s=400&u=f18919e2591ed2a7797661882083f8cf505ac3d1&v=4',
        //     caption: '',
        //     image: [],
        //     video: [],
        //     datePosted: '',
        // }
    ])

    return {
        newsFeedDataList
    }
}