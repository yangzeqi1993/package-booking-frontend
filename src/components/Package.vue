<template>
  <tr id="package">
    <td class="table-content">{{$store.getters.getPackageByIndex(index).receiver}}</td>
    <td class="table-content">{{$store.getters.getPackageByIndex(index).phone}}</td>
    <td class="table-content">{{$store.getters.getPackageByIndex(index).weight}}</td>
    <td class="table-content">{{$store.getters.getPackageByIndex(index).status}}</td>
    <td class="table-content">{{$store.getters.getPackageByIndex(index).appointment}}</td>
  </tr>
</template>
<script>
  export default {
    name: 'Messages',
    props: {
      index: Number,
      message: String
    }
  }
</script>

<style>
  .table-content{
    text-align: left;
  }
</style>
