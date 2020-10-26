import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp (
    {
        apiKey: "AIzaSyBwCLtXV1r0RZMbY0TMGa1Yfu2KyPB6LAA",
        authDomain: "aplicacioncursoreact.firebaseapp.com",
        databaseURL: "https://aplicacioncursoreact.firebaseio.com",
        projectId: "aplicacioncursoreact",
        storageBucket: "aplicacioncursoreact.appspot.com",
        messagingSenderId: "551510193372",
        appId: "1:551510193372:web:c04ef2d7b17a58788cf019"
      
    }
);

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}
