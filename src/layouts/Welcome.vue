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
          <h3>Join Twitter today</h3>
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
  <footer></footer>
</template>

<script>
export default {};
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
  height: 92vh;
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
  height: 92vh;
  z-index: -1;
}

.left .fa-twitter {
  font-size: 190px;
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
</style>