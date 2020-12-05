<template>
  <div id="app">
    <!-- <the-side-bar></the-side-bar> -->
    <!-- <form-create-branch></form-create-branch> -->
    <!-- <form-create-franchise></form-create-franchise> -->
    <form-create-menu></form-create-menu>
  </div>
</template>

<script>
// import FormCreateBranch from "./components/form/FormCreateBranch.vue";
// import FormCreateFranchise from "./components/form/FormCreateFranchise.vue"
// import TheSideBar from "./components/form/TheSideBar.vue"
import FormCreateMenu from "./components/form/FormCreateMenu.vue"
export default {
  name: "App",
  components: {
    // FormCreateBranch,
    // FormCreateFranchise,
    FormCreateMenu,
    // TheSideBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
