import { defineStore } from "pinia";

const state = {
  myData: ""
}

export const useDataStore = defineStore("Data", {
  state: () => state,
  actions: {
    setMyData(data: any) {
      this.myData = data
    }
  },
  getters: {
    getMyData(): any {
      return this.myData
    }
  }

})