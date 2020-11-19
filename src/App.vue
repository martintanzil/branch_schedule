<template>
  <div id="app">
    <form-create-branch></form-create-branch>
  </div>
</template>

<script>
import FormCreateBranch from './components/FormCreateBranch.vue';


export default {
  name: 'App',
  components: {
    FormCreateBranch,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
