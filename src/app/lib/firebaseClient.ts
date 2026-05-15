import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuration Firebase CCNTS
const firebaseConfig = {
  apiKey: "AIzaSyD0y-51cmvPdbtSl_97LdnLZvxe78j1HvI",
  authDomain: "ccnts-d3772.firebaseapp.com",
  projectId: "ccnts-d3772",
  storageBucket: "ccnts-d3772.firebasestorage.app",
  messagingSenderId: "780149361578",
  appId: "1:780149361578:web:1c984dbd78424be087f9d3",
  measurementId: "G-R3L41MG6EM"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Services Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Types pour notre base de données
export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  created_at: string;
  updated_at: string;
}

export interface CourseProgress {
  id: string;
  user_id: string;
  course_id: string;
  percent_complete: number;
  last_module: string | null;
  updated_at: string;
}

export interface QuizResult {
  id: string;
  user_id: string;
  course_id: string;
  score: number;
  passed: boolean;
  total_questions: number;
  correct_answers: number;
  completed_at: string;
}

export interface Certificate {
  certificate_id: string;
  user_id: string;
  course_id: string;
  course_name: string;
  user_name: string;
  issued_at: string;
  verify_code: string;
  pdf_url: string | null;
  is_valid: boolean;
}
