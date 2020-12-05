<template>
  <form @submit.prevent="submitForm">
    <div class="row">
      <div class="col-lg-12">
        <base-card title="Create Branch"> 
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label for="store_name">Branch Name</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      im-insert="true"
                      id="store_name"
                      name="store_name"
                      required
                      placeholder="Cab. Diponegoro, Cab. Cemara"
                      v-model="Branch.name"
                    />
                  </div>
                  <!-- /.input group -->
                </div>
                <div class="form-group">
                  <label for="store_address">Address</label>
                  <textarea
                    id="store_address"
                    class="form-control"
                    rows="4"
                    name="store_address"
                    v-model="Branch.address"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="store_phone_number">Phone Number</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="fas fa-phone"></i
                      ></span>
                    </div>
                    <input
                      type="tel"
                      class="form-control"
                      im-insert="true"
                      id="store_phone_number"
                      name="store_phone_number"
                      required
                      autocomplete="phone_number"
                      v-model="Branch.phoneNumber"
                    />
                  </div>
                  <!-- /.input group -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <opening-time
                    v-for="(day, index) in days"
                    :day="day"
                    :key="index"
                    v-model="checkBoxData"
                  ></opening-time>
                </div>
              </div>
            </div>
         
         
        
        </base-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="float-right">
          <base-button @click="submitForm"></base-button>
        </div>
      </div>
    </div>

    <!-- /.row -->
  </form>
</template>

<script>
import OpeningTime from "../OpeningTime.vue";
import BaseCard from "../base/BaseCard.vue"

export default {
  components: { OpeningTime, BaseCard },
  name: "FormCreateBranch",
  data() {
    return {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      checkBoxData: [],
      Branch: {
        name: "",
        address: "",
        phoneNumber: null,
      },
    };
  },
  methods: {
    submitForm() {
      console.log(this.Branch.name);
      console.log(this.Branch.address);
      console.log(this.Branch.phoneNumber);
    },
  },
};
</script>

<style>
.card-form {
  background-color: #ff7266 !important;
  color: #fff;
}
</style>
