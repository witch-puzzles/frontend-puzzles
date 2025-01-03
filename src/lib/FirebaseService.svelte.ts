import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  type User,
  browserLocalPersistence,
  setPersistence
} from "firebase/auth";

class FirebaseService {
  private firebaseConfig;
  private app;
  private auth;

  currentUser: User | null = $state(null);
  isLoading: boolean = $state(true);
  error: string | null = $state(null);

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

  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(this.auth, email, {
        url: window.location.origin + '/login', // Redirect URL after password reset
        handleCodeInApp: false // Use email link instead of handling in the app
      });
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  async updateDisplayName(displayName: string) {
    try {
      if (!this.currentUser) {
        throw new Error("No user is currently signed in");
      }
      await updateProfile(this.currentUser, {
        displayName,
      });
    } catch (error) {
      this.handleError(error);
      throw error;
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
