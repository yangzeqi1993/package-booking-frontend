<template>
    <div class="home">
       <h2>菜鸟驿站</h2>
       <a-button type="primary" shape="circle" v-on:click="addPackage">+</a-button>

       <br/><br/><br/>

          <table id="package-list-table">
            <tr>
              <td class="table-head">运单号</td>
              <td class="table-head">收件人</td>
              <td class="table-head">电话</td>
              <td class="table-head">状态</td>
              <td class="table-head">预约时间</td>
            </tr>
            <Package v-for="index in getMessagesNum()" v-bind:key="index" v-bind:index="index"/>
          </table>

       <br/>

    </div>
</template>


<script>
  import Package from '../components/Package.vue'
  export default {
    name: 'home',
    components: {
      Package
    },
    mounted() {
      this.$store.dispatch('fetchAllPackagesFromDatabase');
    },
    methods: {
      getMessagesNum(){
        return this.$store.getters.getAllPackages().length;
      },
      addPackage(){
        this.$router.push('/send');
      }
    }
  }
</script>

<style>
  #package-list-table{
    margin: auto;
  }
  .table-head{
    font-size: 30px;
    width: 200px;
    text-align: left;
    color: green;
  }
</style>
