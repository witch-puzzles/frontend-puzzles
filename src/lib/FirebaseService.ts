import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
  browserLocalPersistence,
  setPersistence
} from "firebase/auth";

class FirebaseService {
  private firebaseConfig;
  private app;
  private auth;

  currentUser: User | null = null;
  isLoading: boolean = true;
  error: string | null = null;

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

    // Set up local persistence
    setPersistence(this.auth, browserLocalPersistence);

    // Initialize auth state listener
    this.initAuthStateListener();
  }

  private initAuthStateListener() {
    onAuthStateChanged(this.auth, (user) => {
      this.isLoading = true;
      this.currentUser = user;
      this.isLoading = false;
    });
  }

  async waitForAuth(): Promise<void> {
    if (this.isLoading) {
      return new Promise<void>((resolve) => {
        const checkLoading = setInterval(() => {
          if (!this.isLoading) {
            clearInterval(checkLoading);
            resolve();
          }
        }, 50);
      });
    }
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    try {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
      this.error = null;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  private handleError(error: any) {
    this.error = error.message;
    console.error('Firebase Service Error:', error);
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
export { FirebaseService, firebaseService };
