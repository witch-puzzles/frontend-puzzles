import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

class FirebaseService {
  private firebaseConfig;
  private app;
  private auth;
  private emulatorUrl: string;

  constructor() {
    this.firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    };

    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);

    this.emulatorUrl = `http://localhost:${import.meta.env.VITE_AUTH_EMULATOR_PORT}`
    // comment out the line below to connect to the real service
    //connectAuthEmulator(this.auth, this.emulatorUrl);
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async getIdToken(): Promise<string> {
    const user = this.auth.currentUser;
    if (user) {
      return await user.getIdToken();
    }
    throw new Error("User is not authenticated!");
  }
}

const firebaseService = new FirebaseService();
export { FirebaseService, firebaseService }
