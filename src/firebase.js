import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyD5bmEl5QZPODJ-V3rNau8b2c0LSjMAsZk",
	authDomain: "country-api-practice.firebaseapp.com",
	databaseURL: "https://country-api-practice.firebaseio.com",
	projectId: "country-api-practice",
	storageBucket: "country-api-practice.appspot.com",
	messagingSenderId: "429226149479",
	appId: "1:429226149479:web:e6f085077443e19da0f6c2",
};
const defaultProject = initializeApp(firebaseConfig);
const db = getFirestore(defaultProject);
export default db;
