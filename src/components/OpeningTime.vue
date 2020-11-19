<template>
  <div class="form-group">
    <b-row>
      <b-col cols="1">
        <input
          class="form-check-input"
          type="checkbox"
          :value="day"
          name="OpeningTime[]"
        />
      </b-col>
      <b-col cols="2" class="text-left">
        <label class="form-check-label" for="OpeningTime">
          {{ day }}
        </label>
      </b-col>
      <b-col>
        <div class="d-inline">
          <b-form-timepicker
            v-model="openTime"
            locale="en"
            placeholder="Open time"
          ></b-form-timepicker>
        </div>
      </b-col>
      <label class="d-inline">To</label>
      <b-col>
        <div class="d-inline">
          <b-form-timepicker
            v-model="closeTime"
            locale="en"
            placeholder="Close Time"
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
      openTime: "",
      closeTime: "",
    };
  },
  watch: {
    checkbox: function () {
      this.$emit("child-checkbox", this.checkbox);
    },
  },
  methods: {
    alertMe() {
      this.$refs.closeTime.datetimepicker({
        format: "LT",
      });
    },
  },
};
</script>

<style  scoped>
</style>
