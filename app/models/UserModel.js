/* eslint-disable consistent-return */
import firebase from "react-native-firebase"
import { delay } from "dva-core/saga"
import { AccessToken, LoginManager } from "react-native-fbsdk"
import { NavigationActions } from "react-navigation"

import CustomToast from "../components/CustomToast"

const auth = firebase.auth()

const initialState = {
  user: null
}


export default {
  namespace: "userModel",
  state: initialState,
  subscriptions: {
    setup({ dispatch }) {
      return firebase.auth().onAuthStateChanged(user => {
        dispatch({ type: "checkAuthChange", payload: { user } })
      })
    }
  },
  effects: {
    * checkAuthChange({ payload: { user: userObject } }, effects) {
      const user = userObject ? userObject.toJSON() : null
      const { select, put } = effects
      const { user: currentUser } = yield select(({ userModel }) => userModel)
      yield put({ type: "updateState", payload: { user } })


      if (currentUser === null && user !== null) {
        yield put({ type: "performAfterLoginTasks" })
      } else if (currentUser !== null && user == null) {
        yield put({ type: "performAfterLogoutTasks" })
      } else {
        // SplashScreen.hide();
        const action = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: "LoginScreen" })
          ]
        })
        yield put(action)
      }
    },
    * performAfterLoginTasks(_, effects) {
      const { put, take, call } = effects
      /*
      yield put({ type: "startSyncUserData" })
      yield put({ type: "rateModel/requestBalances" })
      let data = null
      while (data === null) {
        ({ payload: { data } } = yield take("updateUserData"))
      }
      yield take("updateUserData/@@end")

      // Request rates before moving to page
      yield put({ type: "rateModel/request" })
      */

      const action = NavigationActions.navigate({ routeName: "AuthSwitch" })
      yield put(action)
      yield call(delay, 400)
      // SplashScreen.hide()
    },
    * performAfterLogoutTasks(_, { put }) {
      yield put({ type: "cancelSyncUserData" })

      const action = NavigationActions.navigate({ routeName: "NonAuthStack" })
      yield put(action)

      const action2 = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: "LoginScreen"})
        ],
      })
      yield put(action2)
    },
    * createWithPassword({ payload: { email, password, displayName } }, { call }) {
      if(!/[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z0-9-_.]+/.test(email)){
        return CustomToast.show("Email adresini kontrol ediniz.", "danger")
      }

      if (password.trim().length < 8) {
        return CustomToast.show("Şifre en az 8 karakter olmalıdır.", "danger")
      }

      if (!/^[a-züöçğışİ]+(\s[a-züöçğışİ]+)+$/i.test(displayName)) {
        return CustomToast.show("Bir ad ve soyad giriniz.", "danger")
      }

      let user
      try {
        const credential = yield call([auth, auth.createUserAndRetrieveDataWithEmailAndPassword], email, password)
        if (credential) {
          ({ user } = credential)
          yield call([user, user.updateProfile], { displayName, photoURL: "" })
        }
      } catch (e) {
        return CustomToast.show(e.message, "danger")
      }

      try {
        yield call([user, user.sendEmailVerification])
        CustomToast.show("Size doğrulama maili gönderdik. Hesabınızı aktife etmek için doğrulayın..", "success")
      } catch (e) {
        CustomToast.show("Doğrulama maili gönderilirken bir hata oluştu. Lütfen bizimle iletişime geçiniz.", "danger")
      }
    },
    * signInWithPassword({ payload: { email, password } }, { call }) {
      if(!/[a-z0-9-_.]+@[a-z0-9-_.]+\.[a-z0-9-_.]+/.test(email)){
        return CustomToast.show("Email adresini kontrol ediniz.", "danger")
      }

      if (password.trim().length < 8) {
        return CustomToast.show("Şifre en az 8 karakter olmalıdır.", "danger")
      }

      try {
        const credential = yield call([auth, auth.signInAndRetrieveDataWithEmailAndPassword], email, password)
        if (credential) {
          return true
        }
      } catch (e) {
        return CustomToast.show(e.message, "danger")
      }
    },
    * signInWithFacebook(_, { call }) {

      try {
        const result = yield call(LoginManager.logInWithReadPermissions, ["public_profile", "email"])

        if (result.isCancelled) {
          CustomToast.show("Facebook girişini iptal ettiniz.", "danger")
        }

        // get the access token
        const data = yield call(AccessToken.getCurrentAccessToken)

        if (!data) {
          CustomToast.show("Facebook girisi sirasinda beklenmeyen bir hata olustu.", "danger")
        }

        // create a new firebase credential with the token
        const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)

        // login with credential
        const currentUser = yield call([auth, auth.signInAndRetrieveDataWithCredential], credential)

        console.info(JSON.stringify(currentUser.user.toJSON()))
      } catch (e) {
        return CustomToast.show(e.message, "danger")
      }

    },
    * signOut(_, { call, put }) {
      try {
        yield put({ type: "cancelSyncUserData" })
        const response = yield call([auth, auth.signOut])
        if (response) {
          debugger
        }
      } catch (e) {
        return CustomToast.show(e.message, "danger")
      }
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    reset() {
      return { ...initialState }
    }
  }
}
