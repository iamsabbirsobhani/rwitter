<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <q-card class="my-card">
        <q-card-section class="q-card">
          <h6>Home</h6>
        </q-card-section>
        <q-card-section>
          <div class="q-pa-md q-mx-auto full-width">
            <q-input v-model="text" filled autogrow label="What's happening?" />
          </div>
          <div class="btn-cover">
            <div class="blank-icon cursor-none">&nbsp;</div>
            <!-- <q-icon name="far fa-heart" /> -->
            <q-btn
              @click="submitRweet"
              rounded
              label="Tweet"
              class="button"
              color="primary"
            />
          </div>
        </q-card-section>
      </q-card>

      <q-card-section v-if="documents">
        <q-card class="my-card">
          <q-card-section v-for="document in documents" :key="document">
            <h6>{{ document.name }}</h6>
            <!-- <h6>Name</h6> -->
          </q-card-section>
          <q-card-section>
            <!-- <p>{{ post }}</p> -->
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              neque a non natus adipisci alias fuga vel exercitationem in quod!
              Velit dolore numquam consectetur quidem!
            </p>
          </q-card-section>
          <q-card-section>
            <i class="far fa-heart"></i>
          </q-card-section>
        </q-card>
      </q-card-section>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import getUser from "../composable/getUser";
import useCollection from '../composable/useCollection'
import getCollection from '../composable/getCollection'
export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const { user } = getUser();
    const { addDoc, error } = useCollection("users");
    const { documents } = getCollection("users");


    const text = ref(null);

    const submitRweet = async () => {
      if (text.value) {
        const post = {
          name: user.value.displayName,
          friends: [],
          posts: {
            post: text.value,
          },
        };

        await addDoc(post);
      }
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      text,
      submitRweet,
      documents
    };
  },
};
</script>

<style scoped>
.btn-cover {
  width: 98%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blank-icon {
  margin: 20px;
  box-sizing: border-box;
}
h6 {
  margin: 0px;
  margin-left: 15px;
  /* padding: 0; */
}
</style>