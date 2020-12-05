<template>
  <base-card title="Create Franchise">
    <form action="">
      <b-form-group id="input-group-1" label="Franchise Name:" label-for="input-franchise-name">
          <b-form-input
            id="input-franchise-name"
            type="text"
            v-model="name"
            required
            placeholder="Enter Franchise name"
          ></b-form-input>
        </b-form-group>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '../base/BaseCard.vue'
export default {
  name: "FormCreateFranchise",
  components:{
    BaseCard,
  },
  data(){
    return{
      name:null,
    }
  }
};
</script>

<style>
.card-form {
  background-color: #ff7266 !important;
  color: #fff;
}
</style>