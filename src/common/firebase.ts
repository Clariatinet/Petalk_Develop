import { collection } from 'firebase/firestore';
/* eslint-disable @typescript-eslint/no-redeclare */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyD524cf8eNVcs8MfCPBIWw_tP7kLt6odZs',
  authDomain: 'final-project-f5698.firebaseapp.com',
  projectId: 'final-project-f5698',
  storageBucket: 'final-project-f5698.appspot.com',
  messagingSenderId: '162512506291',
  appId: '1:162512506291:web:ef671e9625942528e88fc6',
  measurementId: 'G-H0BY1YHHQE',
};

const app = initializeApp(firebaseConfig);
const authService = getAuth(app);
const dbService = getFirestore(app);
const storageService = getStorage(app);
const database = getDatabase(app);

export { database, app, authService, dbService, storageService };
