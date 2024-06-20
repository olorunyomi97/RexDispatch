// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firebase';
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyBmC_62SLr5IV2SwdU93Rp3M0nc-bkXorQ",
    authDomain: "rex-dispatch-85685.firebaseapp.com",
    databaseURL: "https://rex-dispatch-85685-default-rtdb.firebaseio.com",
    projectId: "rex-dispatch-85685",
    storageBucket: "rex-dispatch-85685.appspot.com",
    messagingSenderId: "666384711598",
    appId: "1:666384711598:web:2f256bc379fa80078f123f",
    measurementId: "G-F4ZS4MT1L2"
}

firebase.initializeApp(config);
export const db = firebase.firestore()

export default firebase.firestore();
// export default firebase.firestore().settings({ experimentalForceLongPolling: true });