<template>
  <q-dialog
    v-model="toolbar"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="../assets/favicon.png" />
        </q-avatar>

        <q-toolbar-title
          ><span class="text-weight-bold">Rwitter</span> Says:</q-toolbar-title
        >

        <q-btn
          @click="hideContent"
          flat
          round
          dense
          icon="close"
          v-close-popup
        />
      </q-toolbar>

      <q-card-section class="row items-center q-pb-none">
        <p class="text-h6" style="color: #1da1f2">Statement</p>
        <q-space />
        <div>
        <p class="text-h6" style="color: gray;">
          Not everything could be implemented due to technical constraints.
        </p>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="text-h6" style="color: #1da1f2">Acknowledge</div>
        This is a clone project influenced by Twitter. It has been created, and
        it did not mean to defame or degrade Twitter, and for sure, it has not
        come to compete with Twitter as well. If Twitter wants, we are ready to
        shut down anytime. Eventually, this project is only for fun and learning
        purpose.
        <br />
        Thank you.
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from "vue";
import Welcome from "src/layouts/Welcome.vue";

export default {
  components: { Welcome },
  props: { showTool: Boolean },
  setup(props, context) {
    const toolbar = ref(false);

    const hideContent = () => {
      context.emit("hideDialog");
    };

    toolbar.value = props.showTool;
    return { toolbar, hideContent };
  },
};
</script>
