<template>
  <nav class="row navbar navbar-expand navbar-dark bg-info">
    <SideNavBar />
    <h1 class="title">
      Kanbandoit
    </h1>
    <!-- <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img
          alt="logo"
          src="../assets/img/cw-logo.png"
          height="45"
        /> -->
    <!-- </div> -->
    <!-- </router-link> -->
    <!-- <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button> -->
    <div class="collapse navbar-collapse d-flex justify-content-end pr-3" id="navbarText">
      <div class="create-board-btn p-3">
        <CreateBoardComponent />
      </div>
      <!-- <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link">
            About
          </router-link>
        </li>
      </ul> -->
      <span class="navbar-text">
        <button
          class="btn btn-outline-primary text-uppercase"
          @click="login"
          v-if="!user.isAuthenticated"
        >
          Login
        </button>

        <div class="dropdown" v-else>
          <div
            class="dropdown-toggle d-flex align-items-center"
            @click="state.dropOpen = !state.dropOpen"
          >
            <img
              :src="user.picture"
              alt="user photo"
              height="40"
              class="rounded"
            />
            <span class="mx-3">{{ user.name }}</span>
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
            <!-- <router-link :to="{ name: 'Profile' }">
              <div class="list-group-item list-group-item-action hoverable">
                Profile
              </div>
            </router-link> -->
            <div
              class="list-group-item list-group-item-action hoverable"
              @click="logout"
            >
              logout
            </div>
          </div>
        </div>
      </span>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import SideNavBar from '../components/sideNaveBar'
import CreateBoardComponent from '../components/CreateBoardComponent'

export default {
  name: 'Navbar',
  components: { SideNavBar, CreateBoardComponent },
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
  .title {
    font-size: 4em;
    font-family: 'Rock Salt', cursive;
  }
  .logo {
    box-shadow: 1px 1px 10px 0px black;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    opacity: 80%;
    background-color: #CFBBA3;
  }
  .logo:active{
    box-shadow: -1px -1px -10px 0px red;

    opacity: 50%;
  }

  .dropdown-menu {
    user-select: none;
    display: block;
    transform: scale(0);
    transition: all 0.15s linear;
  }
  .dropdown-menu.show {
    transform: scale(1);
  }
  .hoverable {
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
  }
  .nav-link{
    text-transform: uppercase;
  }
  .nav-item .nav-link.router-link-exact-active{
    color: var(--primary);
  }
</style>
