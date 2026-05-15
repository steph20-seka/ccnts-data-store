// Export all Firebase utilities for easy importing
export { auth, db, storage } from './firebaseClient';
export type { Profile, CourseProgress, QuizResult, Certificate } from './firebaseClient';

export {
  getUserProfile,
  getCourseProgress,
  updateCourseProgress,
  getQuizResult,
  saveQuizResult,
  canGenerateCertificate,
  saveCertificate,
  getUserCertificates,
  verifyCertificate,
} from './firestoreServices';
