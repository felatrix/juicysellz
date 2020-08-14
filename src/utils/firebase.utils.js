import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3ggglBNEARhi1VUM4FUyYLyY876IHFrI",
    authDomain: "juicysellz.firebaseapp.com",
    databaseURL: "https://juicysellz.firebaseio.com",
    projectId: "juicysellz",
    storageBucket: "juicysellz.appspot.com",
    messagingSenderId: "315853999564",
    appId: "1:315853999564:web:dfa179489bef34c4516169",
    measurementId: "G-4C908HW0ZB"
  };

firebase.initializeApp(firebaseConfig)

export const createdUserProfileDoc = async (userAuth,addtionalData)=>{
  if(!userAuth) return
  const userRef =  firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if(!snapShot.exists){
    const {displayName,email} = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      })
    } catch (error) {
        console.log('error nih',error)
    }
  }
  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=> {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

export default firebase