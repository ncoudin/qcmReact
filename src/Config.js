import firebase from 'firebase';

const firebaseConfig = {
 // TODO
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database }