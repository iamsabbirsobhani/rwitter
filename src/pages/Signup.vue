<template>
  <q-form
    @submit.prevent="onSubmit"
    @reset="onReset"
    class="my-form q-gutter-md q-"
  >
    <q-card class="my-card q-pa-md">
      <q-item class="qitem">
        <q-item-section avatar>
          <q-btn
            :to="{ path: '/' }"
            size="20px"
            round
            color="primary"
            icon="fab fa-twitter"
          />
        </q-item-section>

        <q-item-section> </q-item-section>
      </q-item>

      <q-card-section>
        <div class="text-h6">Create your account</div>
      </q-card-section>

      <q-card-section>
        <q-input
          outlined
          v-model="name"
          type="text"
          label="Name"
          hint="What's your name?"
          required
        />
        <q-input
          outlined
          v-model="email"
          type="email"
          label="Email"
          hint="Enter your email"
          required
        />
        <q-input
          outlined
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          label="Password"
          hint="Enter a password"
          required
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section v-if="error">
        <q-banner dense inline-actions class="text-white bg-red">
          {{ error }}
          <template v-slot:action>
            <q-btn
              @click="closeBanner"
              round
              icon="fas fa-times"
              flat
              color="white"
            />
          </template>
        </q-banner>
      </q-card-section>

      <q-card-section>
        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div class="q-py-md">
          <q-btn :loading="loading" label="Sign up" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-card-section>


      <q-card-section class="links">
        <span>Already signed up?</span>.
        <a @click="signIn">Sign in for Rwitter</a>
      </q-card-section>
    </q-card>
  </q-form>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import useSignup from "../composable/useSignup";

export default {
  setup() {
    const name = ref(null);
    const email = ref(null);
    const password = ref(null);
    const submitting = ref(false);
    const isPwd = ref(true);
    const accept = ref(false);
    const $q = useQuasar();
    const router = useRouter();
    const { signup, error, loading } = useSignup();

    const handleSignup = async () => {
      submitting.value = true
      let res = await signup(email.value, password.value, name.value);
      submitting.value = false

      if (!error.value) {
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "fas fa-user-plus",
          message: "Signed up",
        });
        name.value = null
        email.value = null
        password.value = null
        accept.value = false
      }
    };

    // signup notify
    const onSubmit = () => {
      if (accept.value !== true) {
        $q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        handleSignup();
      }
    };

    const onReset = () => {
      name.value = null;
      email.value = null;
      password.value = null;
      accept.value = false;
    };

    // end of signup notify
    const signIn = () => {
      router.push({ path: "signin" });
    };

    const closeBanner = () => {
      error.value = null;
    };
    const showPop = ref(false)

    // const show

    return {
      name,
      email,
      password,
      isPwd,
      accept,
      onSubmit,
      onReset,
      signIn,
      error,
      closeBanner,
      submitting,
      loading,

      showPop
    };
  },
};
</script>

<style scoped>
.my-card {
  margin: 10px auto;
  max-width: 600px;
  border-radius: 12px;
}

.text-h6 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 23px;
  font-weight: 700;
}

.my-form {
  margin-top: 10px;
}
.qitem {
  flex-direction: column;
  align-items: center;
}
.links a {
  cursor: pointer;
  color: rgba(29, 161, 242, 1);
  text-decoration-line: underline;
}
@media (max-width: 400px){
  .my-card{
    width: 290px
  }
  .my-form{
    margin: 0;
  }
  .q-pa-md {
    padding: 4px 4px;
}
}
</style>