<template>
  <!-- Use any element to open the sidenav -->
  <!-- <div @click="openNav()" class="side-nav-btn-open p-3"> -->
  <!-- <i class="fa fa-align-justify fa-4x text-light"></i> -->
  <!-- <button class="btn btn-primary">
      <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
    </button> -->
  <!-- <div class="col-2">
      <router-link :to="{name: 'Home'}">
        <img src="../images/Bonzai.svg" class="logo" alt="">
      </router-link>
    </div> -->
  <!-- </div> -->
  <div @click="openNav()" class="side-nav-btn-open p-3">
    <img src="../images/Bonzai.svg" class="logo" alt="">
  </div>

  <div class="SideNaveBar text-center">
    <div id="mySidenav" class="sidenav">
      <!-- <a href="javascript:void(0)"
         class="closebtn"
         @click="closeNav()"
      >&times;</a> -->
      <div class="side-nav-routes d-flex flex-column justify-content-center">
        <router-link :to="{ name: 'Home' }" @click="closeNav()">
          Home
        </router-link>
        <router-link :to="{ name: 'About' }" @click="closeNav()">
          About
        </router-link>
        <router-link :to="{ name: 'Profile' }" @click="closeNav()">
          Profile
        </router-link>
      </div>
      <div class="side-nav-logo">
        <img src="../images/Bonzai.svg" class="logo" alt="" @click="routeHome">
      </div>
    </div>

    <!-- Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page -->
    <!-- <div id="main">
      ...
    </div> -->
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'SideNaveBar',
  setup() {
    return {
      openNav() {
        document.getElementById('mySidenav').style.width = '15vw'
      },
      closeNav() {
        document.getElementById('mySidenav').style.width = '0'
      },
      routeHome() {
        router.push({ name: 'Home' })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
a {
  padding: 0;
}
li{
  list-style: none;
}
.side-nav-logo{
  text-align: center;
  margin-bottom: 20px;
  opacity: 50%;
}
.sidenav{
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.side-nav-btn-open{
  cursor: pointer;
}
.logo {
  box-shadow: 1px 1px 10px 0px #000;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  // opacity: 80%;
  // background-color: #CFBBA3;
  background-color: #E8CC98;
}
.logo:active{
  box-shadow: -1px -1px -10px 0px #000;
}
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 10px 0px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left .5s;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
