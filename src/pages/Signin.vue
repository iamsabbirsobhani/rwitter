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
        <div class="text-h6">Log in to Rwitter</div>
      </q-card-section>

      <q-card-section>
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
          hint="Enter your password"
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

      <q-card-section>
        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div class="q-py-md">
          <q-btn label="Log in" type="submit" color="primary" />
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
        <span>Don't have an account?</span>.
        <a @click="signUp">Sign up for Rwitter</a>
      </q-card-section>
    </q-card>
  </q-form>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export default {
  setup() {
    const name = ref(null);
    const email = ref(null);
    const password = ref(null);
    const isPwd = ref(true);
    const accept = ref(false);
    const $q = useQuasar();
    const router = useRouter();

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
        $q.notify({
          color: "green-4",
          textColor: "white",
          icon: "face",
          message: "Logged in",
        });
      }
    };

    const onReset = () => {
      name.value = null;
      email.value = null;
      password.value = null;
      accept.value = false;
    };
    // end of signup notify

    const signUp = () => {
      router.push({ path: "signup" });
    };
    return { name, email, password, isPwd, accept, onSubmit, onReset, signUp };
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
  margin-top: 50px;
}
.qitem {
  flex-direction: column;
  align-items: center;
}

.links a {
  color: rgba(29, 161, 242, 1);
  text-decoration-line: underline;
  cursor: pointer;
}
</style>