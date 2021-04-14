import { ref } from 'vue'
import { projectFirestore} from '../firebase/config'
import getUser from '../composable/getUser'

const { user } = getUser();
const useCollection = (collection) => {
    const error = ref(null)
    const addDoc = async (doc) => {
        error.value = null

        const ranValue = Math.random()
        const random = Math.round(ranValue * new Date())
        const path = `${user.value.displayName}/${random}/${random}`

        try{
            await projectFirestore.collection(collection).doc(path).set(doc)
        }catch(err){
            console.log(err)
            error.value = 'Could not send the message'
        }
    }

    return { error, addDoc }
}

export default useCollection