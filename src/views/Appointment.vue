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
    />
  </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="取件时间："
      has-feedback
    >
      <a-date-picker style="width: 100%" />
      <a-time-picker :minuteStep="15" :secondStep="10"/>
    </a-form-item>

    <a-form-item
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      label="取件时间："
      has-feedback
    >
      <a-input
        id="date"
        placeholder="I'm the content"
        v-model="date"
      />
    </a-form-item>

    <a-button type="primary" v-on:click="appointment">预约</a-button>
    <a-button v-on:click="cancel">取消</a-button>
  </div>
</template>

<script>
  export default {
    name: "Appointment",
    data () {
      return {
        id:"",
        date: "",
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 12 },
        },
      };
    },
    methods: {

      appointment () {
        this.$store.dispatch('updatePackage',{id:this.id, date:this.date});
      },

      cancel (){

      }
  }
  }
</script>
