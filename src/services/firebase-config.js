import {initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBCysteHTePsBlEVdWINoGgHCID3HjqKJs",
    authDomain: "webtout-8023c.firebaseapp.com",
    projectId: "webtout-8023c",
    storageBucket: "webtout-8023c.appspot.com",
    messagingSenderId: "267440712001",
    appId: "1:267440712001:web:bcbf78ec395014284ad9c0",
    measurementId: "G-J1PYLTL6M1"
};
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
export {
    app,db

}
