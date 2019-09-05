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
    getAllPackages(state){
      return function () {
        return state.packageList;
      }
    },
    getPackageByIndex(state){
      return function (index) {
        return state.packageList[index - 1];
      };
    }
  },
  mutations: {
    setAllPackagesToList(state,data){
      state.packageList = [];
      state.packageList = data;
    }
  },
  actions: {
    addPackageToDatabase(context,data){
        axios.post('http://localhost:8080/packagers', {
          id: data.id, // 系统自动生成
          receiver: data.receiver,
          phone: data.phone,
          weight: data.weight,
          status: "未预约",
          appointment: ""
        })
          .then(function (response) {
            context.dispatch('fetchAllPackagesFromDatabase');
            window.console.log(response.data);
          })
          .catch(function (error) {
              window.console.log(error);
          })
    },

    updatePackageStatusToDatabase(context,data){
        axios.put('http://localhost:8080/packagers/'+data.id, {
          appointment: data.date
        })
          .then(function (response) {
            context.dispatch('fetchAllPackagesFromDatabase');
            window.console.log(response.data);
          })
          .catch(function (error) {
            window.console.log(error);
          });
    },

    fetchAllPackagesFromDatabase(context){
      axios.get('http://localhost:8080/packagers')
        .then(function (response) {
          context.commit('setAllPackagesToList',response.data);
        })
        .catch(function (error) {
          window.console.log(error);
        })
        .finally(function () {
          // router.push("/");
        });
    }

  }
})
