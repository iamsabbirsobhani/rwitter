import {
  ref
} from 'vue'
import {
  projectAuth
} from '../firebase/config'

const error = ref(null)
const loading = ref(null)

const signup = async (email, password, name) => {
  error.value = null
  loading.value = true
  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)

    if (!res) {
      throw new Error('Could not complete the signup')
    }

    loading.value = false

    await res.user.updateProfile({
      displayName: name
    })

    error.value = null

    return res

  } catch (err) {
    error.value = err.message
    loading.value = false
  }
}

const useSignup = () => {
  return {
    signup,
    error,
    loading
  }
}

export default useSignup
