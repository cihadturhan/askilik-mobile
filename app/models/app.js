import casual from "casual-browserify"
import { arrayOf } from "../utils/constants"

/*eslint-disable*/

export default {
  namespace: "app",
  state: {
    login: false,
    loading: true,
    fetching: false
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
  effects: {
    * loadStorage(action, { call, put }) {

    },
    * login({ payload }, { call, put }) {


    },
    * logout(action, { call, put }) {


    }
  },
  subscriptions: {
    setup({ dispatch }) {

      casual.define("feed", () => (
        {
          id: casual.uuid,
          imageIndex: casual.integer(1, 15),
          text: casual.sentences(2),
          createdAt: casual.date("DD MMM YYYY"),
          user: {
            name: casual.first_name,
            surname: casual.last_name,
            profileUrl: `https://randomuser.me/api/portraits/men/${casual.integer(1, 20)}.jpg`
          }
        }
      ))

      casual.define("conceptItem", () => (
        {
          id: casual.uuid,
          imageIndex: casual.integer(1, 15),
          title: casual.word,
          followers: casual.double(1, 99),
          feeds: arrayOf(5 + Math.random() * 10, casual._feed)
        }
      ))

      casual.define("concept", () => (
        {
          id: casual.uuid,
          title: casual.word.toUpperCase(),
          subtitle: casual.short_description,
          items: arrayOf(5 + Math.random() * 10, casual._conceptItem)
        }
      ))

    }
  }
}
