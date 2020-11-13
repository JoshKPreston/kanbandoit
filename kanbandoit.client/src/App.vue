<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <!-- <transition name="route" mode="out-in"> -->
      <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </main>
  <footer>
    <!-- <div class="main-logo">
      <img src="./images/Bonzai.svg" class="logo" alt="" @click="routeHome">
    </div> -->
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    // onMounted(() => {
    //   // eslint-disable-next-line no-undef
    //   $('body').mousewheel(function(event, delta) {
    //     this.scrollLeft -= (delta * 30)

    //     event.preventDefault()
    //   })
    // })
    return {

      appState: computed(() => AppState)

    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

// .main-logo img {
//   height: 15vh;
//   position: absolute;
//   top: 0;
//   right: 50vw;
// }
</style>
