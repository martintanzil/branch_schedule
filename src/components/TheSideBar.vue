<template>
  <div>
    <b-button v-b-toggle.sidebar-1 class="b-btn">Toggle Sidebar</b-button>
    <b-sidebar
      id="sidebar-1"
      title="Sidebar"
      shadow
      :backdrop-variant="variant"
      backdrop
    >
      <ul>
        Home
      </ul>
      <ul>
        Branch
      </ul>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "TheSideBar",
  data() {
    return {
      variant: "white",
    };
  },
};
</script>

<style scoped>
ul {
  color: red;
}

.b-btn {
  position: fixed !important;
  left: 0px;
  top:0px;
  margin: 10px;
  background-color: orangered !important;
  border: 3px solid green;
}


</style>