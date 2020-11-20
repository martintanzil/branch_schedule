<template>
  <div class="form-group">
    <b-row>
      <b-col cols="1">
        <input
          class="form-check-input"
          type="checkbox"
          :value="day"
          name="OpeningTime[]"
          @click="toogleChecked"
        />
      </b-col>
      <b-col cols="2" class="text-left">
        <label class="form-check-label" :class="{'blur':!checked }" for="OpeningTime">
          {{ day }}
        </label>
      </b-col>
      <b-col>
        <div class="d-inline">
          <b-form-timepicker
            locale="en"
            placeholder="Open time"
            :disabled="!checked"
            v-model="openTime"
          ></b-form-timepicker>
        </div>
      </b-col>
      <label class="d-inline" :class="{'blur':!checked }">To</label>
      <b-col>
        <div class="d-inline">
          <b-form-timepicker
            locale="en"
            placeholder="Close Time"
            v-model="closeTime"
            :disabled="!checked"
          ></b-form-timepicker>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "OpeningTime",
  components: {},
  // model:{
  //   prop: 'scheduleArray',
  //   event:
  // },
  props: {
    day: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      checkbox: false,
      openTime: null,
      closeTime: null,
      checked: false,
    };
  },
  methods: {
    toogleChecked() {
      this.checked = !this.checked;
      if (this.checked != true) {
        this.openTime = null;
        this.closeTime = null;
      }
    },
  },
};
</script>

<style  scoped>
.blur{
  color:#dddddd;
}
</style>
