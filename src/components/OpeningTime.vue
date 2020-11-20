<template>
  <div class="form-group">
    <b-row>
      <b-col cols="1">
        <input
          class="form-check-input"
          type="checkbox"
          :value="scheduleData"
          name="checkBoxSchedule"
          @change="onCheckedChange"
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
  props: ['value', 'day'],
  data() {
    return {
      currentCheckboxData: [],
      checked: false,
      openTime: "",
      closeTime: "",
      scheduleData:{
        day: "",
        openTime: "",
        closeTime: ""
      },
    };
  },
  methods: {
    onCheckedChange(){
      this.checked = !this.checked
      
      if(this.checked) this.addCheckboxValueToParent()
      else this.deleteCheckboxValueToParent()
    },
    updateCheckboxValueLocally(){
      this.currentCheckboxData = [...this.value]
      if(this.currentCheckboxData.length !== 0){
        this.currentCheckboxData = this.currentCheckboxData.filter(schedule => {
          return schedule.day !== this.scheduleData.day
        })
      }
    },
    addCheckboxValueToParent (){
      this.updateCheckboxValueLocally()
      this.currentCheckboxData.push(this.scheduleData)
      this.$emit('input', this.sortScheduleByDays(this.currentCheckboxData))
    },
    deleteCheckboxValueToParent(){
      this.updateCheckboxValueLocally()
      this.$emit('input', this.sortScheduleByDays(this.currentCheckboxData))
    },
    sortScheduleByDays(scheduleData){
      const sorter = {
        "Monday": 1,
        "Tuesday": 2,
        "Wednesday": 3,
        "Thursday": 4,
        "Friday": 5,
        "Saturday": 6,
        "Sunday": 7
      }
      return scheduleData.sort((a, b) => {
        return sorter[a.day] - sorter[b.day];
      });
    }
  },
  watch:{
    openTime(newValue){
      if(this.checked){
        this.scheduleData.openTime = newValue
        this.addCheckboxValueToParent()  
      }
    },
    closeTime(newValue){
      if(this.checked){
        this.scheduleData.closeTime = newValue
        this.addCheckboxValueToParent()  
      }
    },
  },
  mounted(){
    this.scheduleData.day = this.day
  }
};
</script>

<style  scoped>
</style>
