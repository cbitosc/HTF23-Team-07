// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDPET90lkT9VttOSikGz5J8OF_UuK7HTbo",
	authDomain: "get-ur-movie.firebaseapp.com",
	projectId: "get-ur-movie",
	storageBucket: "get-ur-movie.appspot.com",
	messagingSenderId: "239247392373",
	appId: "1:239247392373:web:d22f3e896954e5ea16023c",
	measurementId: "G-BR52MEH0NN",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
