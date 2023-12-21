// store.js
import { createStore } from "vuex";

export default createStore({
  state: {
    currGroupID: "",
    JoinGroupID: "",
    currPersonalGroupID: "",
    selectedID: "",
    // inisialisasi dengan string kosong
    // ... state lainnya ...
  },
  mutations: {
    // ... mutations lainnya ...
    setCurrGroupID(state, newGroupID) {
      state.currGroupID = newGroupID;
    },
    setJoinGroupID(state, newJoinGroupID) {
      state.JoinGroupID = newJoinGroupID;
    },
    setCurrPersonalGroupID(state, newPersonalGroupID) {
      state.currPersonalGroupID = newPersonalGroupID;
    },
    setSelectedID(state, newSelectedID) {
      state.selectedID = newSelectedID;
    },
  },
  actions: {
    // ... actions lainnya ...
    updateCreatedGroup({ commit }, newGroupID) {
      // Lakukan operasi lain jika diperlukan
      commit("setCurrGroupID", newGroupID);
    },
    updateJoinGroupID({ commit }, newJoinGroupID) {
      // Lakukan operasi lain jika diperlukan
      commit("setJoinGroupID", newJoinGroupID);
    },
    updatePersonalGroupID({ commit }, newPersonalGroupID) {
      // Perhatikan bahwa disini harusnya menggunakan mutation setCurrPersonalGroupID
      commit("setCurrPersonalGroupID", newPersonalGroupID);
    },
    updateSelectedID({ commit }, newSelectedID) {
      // Perhatikan bahwa disini harusnya menggunakan mutation setCurrPersonalGroupID
      commit("setSelectedID", newSelectedID);
    },
  },
  getters: {
    // ... getters lainnya ...
    computedCurrGroupID(state) {
      // Misalnya, tambahkan manipulasi data atau operasi lain jika diperlukan
      return state.currGroupID;
    },
    computedJoinGroupID(state) {
      return state.JoinGroupID;
    },
    computedPersonalGroupID(state) {
      return state.currPersonalGroupID;
    },
    computedSelectedID(state) {
      return state.selectedID;
    },
  },
});
