import { ref, Ref } from 'vue';


export default () => {

    const text: Ref<string> = ref('');

    const submitPostData = (): void => {
        alert('you have clicked the submit button');
    }

    return { submitPostData, text }
}