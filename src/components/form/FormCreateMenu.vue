<template>
  <base-card title="Create Menu">
    <form @submit="addMenu" @reset="resetMenu">
      <b-row>
        <b-col cols="6">
          <b-form-group
            id="input-group-1"
            label="Menu Name:"
            label-for="input-1"
          >
            <b-form-input
              id="input-menu-name"
              type="text"
              required
              v-model="menu.name"
              placeholder="Enter menu name"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Menu Price:"
            label-for="input-menu-price"
          >
            <b-form-input
              id="input-menu-price"
              type="text"
              required
              v-model="menu.price"
              placeholder="Enter menu price"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-textarea rows="4" max-rows="6" placeholder="Enter Menu Description" v-model="menu.description"></b-form-textarea>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group
            id="input-menu-image"
            label="Menu Image:"
            label-for="input-menu-image"
          >
            <b-form-file
              v-model="menu.image"
              accept="image/jpg, image/png, image/jpeg"
              :state="Boolean(file1)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">Selected file: {{ menu.image ? menu.image.name : '' }}</div>
          </b-form-group>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ menu }}</pre>
          </b-card>
        </b-col>
      </b-row>
      <base-button></base-button>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "../base/BaseButton.vue";
import BaseCard from "../base/BaseCard.vue";
export default {
  name: "FormCreateMenu",
  components: {
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      file1:null,
      menu: {
        name: null,
        price: null,
        image:null,
        description:null,
      },
    };
  },
  methods: {
    addMenu(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.menu) +"      "+  this.file1);
      
    },
    resetMenu() {
      this.menu.name = null;
      this.menu.price = null;
      this.menu.description=null;
    },
  },
};
</script>

<style scoped>
.card-form {
  background-color: #ff7266 !important;
  color: #fff;
}

.form-control {
  margin: 10px;
}

input {
  width: 100%;
}
</style>