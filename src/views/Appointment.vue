<template>
  <div id="appointment">
  <a-form-item
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
    label="运单号："
    has-feedback
  >
    <a-input
      id="id"
      placeholder="I'm the content"
      v-model="id"
      style="width: 300px"
    />
  </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="取件时间："
      has-feedback
    >
      <a-date-picker
        format="YYYY-MM-DD HH:mm:ss"
        :disabledDate="disabledDate"
        :disabledTime="disabledDateTime"
        :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
        v-on:change="getDate"
        style="width: 300px"
      />
    </a-form-item>

    <a-button type="primary" v-on:click="appointment">预约</a-button>
    <a-button v-on:click="cancel">取消</a-button>
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    name: "Appointment",
    data () {
      return {
        id:"",
        date: "",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 6 },
        },
      };
    },
    methods: {

      appointment () {
        if(this.date !== "" && this.id !== ""){
          this.$store.dispatch('updatePackageStatusToDatabase',{id:this.id, date:this.date});
          this.date = "";
          this.$router.push('/');
        }else {
          alert("请输入有效信息");
        }
      },

      cancel (){

      },

      getDate(date, dateString) {
        console.log(date, dateString);
        this.date = dateString
      },

      moment,
      range(start, end) {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      },

      disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
      },

      disabledDateTime() {
        return {
           disabledHours: () => this.range(0, 24).splice(0, 8),
          // disabledMinutes: () => this.range(30, 60),
          // disabledSeconds: () => [55, 56],
        };
      },

    }
  }
</script>
