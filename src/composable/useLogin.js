import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
const loading = ref(null)

const login = async (email, password) => {
    error.value = null
    loading.value = true

    try{
        const res = await projectAuth.signInWithEmailAndPassword(email, password)

        error.value = null

        loading.value = false

        return res
    }catch(err) {
        error.value = err.message
        loading.value = false
    }
}

const useLogin = () => {
        loading.value = false
    return { login, error, loading}
}

export default useLogin