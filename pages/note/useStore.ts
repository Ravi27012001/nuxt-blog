import { defineStore } from "pinia";

const state = {
  myData: [{ id: 0, NoteHeading: "Heading", NoteContent: "This is my content ,which is important" },
  { id: 1, NoteHeading: "Pinia", NoteContent: "Pinia is a store library for Vue, it allows you to share a state across components/pages. If you are familiar with the Composition API, you might be thinking you can already share a global state with a simple export const state = reactive({})" },
  ]
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