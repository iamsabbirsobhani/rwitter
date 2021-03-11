<template>
  <div class="main">
    <div class="left">
      <div class="img"></div>
      <div class="icon-cover">
        <i class="fab fa-twitter"></i>
      </div>
    </div>
    <div class="right">
      <div class="right-cover">
        <div class="right-cover-2">
          <i class="fab fa-twitter"></i>
          <h1>Happening now</h1>
          <h3>Join Twitter today.</h3>
          <div class="button">
            <q-btn
              unelevated
              rounded
              color="primary"
              label="Sign up"
              size="15px"
              class="full-width"
            />
            <q-btn
              unelevated
              :outline="true"
              rounded
              text-color="primary"
              color="white"
              label="Log in"
              size="15px"
              class="full-width q-ma-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- footer section -->
  <footer class="fit row wrap justify-center items-center content-center">

    <a @click="cloneDialog">About</a>
    <a @click="cloneDialog">Help Center</a>
    <a @click="cloneDialog">Terms of Service</a>
    <a @click="cloneDialog">Privacy Policy</a>
    <a @click="cloneDialog">Cookie Policy</a>
    <a @click="cloneDialog">Ads info</a>
    <a @click="cloneDialog">Blog</a>
    <a @click="cloneDialog">Status</a>
    <a @click="cloneDialog">Careers</a>
    <a @click="cloneDialog">Brand Resources</a>
    <a @click="cloneDialog">Advertising</a>
    <a @click="cloneDialog">Marketing</a>
    <a @click="cloneDialog">Twitter for Business</a>
    <a @click="cloneDialog">Developers</a>
    <a @click="cloneDialog">Directory</a>
    <a @click="cloneDialog">Settings</a>
    <span href="#">© 2021 Rwitter, Inc.</span>
  </footer>
  <Toolbar @hideDialog="hideDialog" v-if="showTools" :showTool="showTools" />
</template>

<script>
import Toolbar from "../pages/Toolbar.vue";
import { ref, computed } from "vue";
export default {
  components: { Toolbar },
  props: { hideDialog: Boolean },

  setup(props) {
    const showTools = ref(false);

    showTools.value = props.hideDialog;
    const cloneDialog = () => {
      showTools.value = true;
    };

    const hideDialog = () => {
      showTools.value = false;
    };

    return { showTools, cloneDialog, hideDialog};
  },

};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

/* flex left */
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 90vh;
  max-width: 128vh;
  flex: 1;
}
.back-img-containter {
  position: absolute;
}
.img {
  background-image: url("../assets/twitter-w.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  inset: 0px;
  opacity: 1;
  position: absolute;
  width: 100%;
  height: 90vh;
  z-index: -1;
}

.left .fa-twitter {
  font-size: 210px;
  color: white;
}

.icon-cover {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* end of flex left */

/* ------------------------------- */

/* flex right */
.right {
  display: flex;
  flex: 0 0 43em;
  height: 90vh;
}

.right-cover {
  padding: 20px;
  display: inline-block;
  align-self: center;
}
.right-cover-2 {
  display: flex;
  flex-direction: column;
  padding: 10px;
  flex: 0 0 100em;
}

h1 {
  margin: 20px 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 55px;
  font-weight: bold;
  overflow-wrap: break-word;
  letter-spacing: -1.2px;
}
h3 {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  margin-bottom: 32px;
  font-weight: 700;
}

.right .fa-twitter {
  font-size: 28px;
  color: rgba(29, 161, 242, 1);
}
.button {
  max-width: 350px;
}

/* end of flex right */

/* footer */
footer {
  padding: 12px 16px;
}

footer span {
  color: rgb(91, 112, 131);
  font-size: 13px;
}

a {
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
  padding-right: 16px;
  color: rgb(91, 112, 131);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
a:hover {
  text-decoration-line: underline;
}
/* end of footer */
</style>