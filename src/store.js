import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const initState = {
  packageList:[]
};

export default new Vuex.Store({
  state: initState,
  getters: {
    getPackageById(state){
      window.console.log(state.packageList)
      return function (id) {
        for(let packager in state.packageList){
          window.console.log(state.packageList)
          window.console.log(id.toString())
          if(packager.id === "4"){
            return packager;
          }
        }
        return null;
      }
    }
  },
  mutations: {
    pushPackageList(state,data){
      state.packageList.push(data);
    }
  },
  actions: {
    addPackage(context,data){
      axios.post('http://localhost:8080/packagers', {
        id: data.id, // 系统自动生成
        receiver: data.receiver,
        phone: data.phone,
        weight: data.weight,
        status: "未预约",
        appointment: ""
      })
        .then(function (response) {
            context.commit('pushPackageList',response.data);
        })
        .catch(function (error) {
          window.console.log(error);
        });
    },

    updatePackage(context,data){
        axios.put('http://localhost:8080/packagers/'+data.id, {
          appointment: data.date
        })
          .then(function (response) {
            context.commit('pushPackageList',response.data);
          })
          .catch(function (error) {
            window.console.log(error);
          });
    }

  }
})
