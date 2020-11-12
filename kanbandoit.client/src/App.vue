<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
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

</style>
