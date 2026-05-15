import {
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebaseClient';
import type { Profile, CourseProgress, QuizResult, Certificate } from './firebaseClient';

// Helper: Get user profile from database
export async function getUserProfile(userId: string): Promise<Profile | null> {
  try {
    const docRef = doc(db, 'profiles', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as Profile;
    }
    return null;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

// Helper: Get course progress
export async function getCourseProgress(
  userId: string,
  courseId: string
): Promise<CourseProgress | null> {
  try {
    const progressRef = doc(db, 'course_progress', `${userId}_${courseId}`);
    const docSnap = await getDoc(progressRef);

    if (docSnap.exists()) {
      return docSnap.data() as CourseProgress;
    }
    return null;
  } catch (error) {
    console.error('Error fetching progress:', error);
    return null;
  }
}

// Helper: Update course progress
export async function updateCourseProgress(
  userId: string,
  courseId: string,
  percentComplete: number,
  lastModule?: string
): Promise<CourseProgress | null> {
  try {
    const progressId = `${userId}_${courseId}`;
    const progressRef = doc(db, 'course_progress', progressId);

    const progressData: Partial<CourseProgress> = {
      id: progressId,
      user_id: userId,
      course_id: courseId,
      percent_complete: percentComplete,
      last_module: lastModule || null,
      updated_at: new Date().toISOString(),
    };

    await setDoc(progressRef, progressData, { merge: true });

    return progressData as CourseProgress;
  } catch (error) {
    console.error('Error updating progress:', error);
    return null;
  }
}

// Helper: Get quiz result
export async function getQuizResult(
  userId: string,
  courseId: string
): Promise<QuizResult | null> {
  try {
    const quizRef = doc(db, 'quiz_results', `${userId}_${courseId}`);
    const docSnap = await getDoc(quizRef);

    if (docSnap.exists()) {
      return docSnap.data() as QuizResult;
    }
    return null;
  } catch (error) {
    console.error('Error fetching quiz result:', error);
    return null;
  }
}

// Helper: Save quiz result
export async function saveQuizResult(
  userId: string,
  courseId: string,
  score: number,
  passed: boolean,
  totalQuestions: number,
  correctAnswers: number
): Promise<QuizResult | null> {
  try {
    const quizId = `${userId}_${courseId}`;
    const quizRef = doc(db, 'quiz_results', quizId);

    const quizData: QuizResult = {
      id: quizId,
      user_id: userId,
      course_id: courseId,
      score,
      passed,
      total_questions: totalQuestions,
      correct_answers: correctAnswers,
      completed_at: new Date().toISOString(),
    };

    await setDoc(quizRef, quizData, { merge: true });

    return quizData;
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return null;
  }
}

// Helper: Check if user can generate certificate
export async function canGenerateCertificate(
  userId: string,
  courseId: string,
  requiresQuiz: boolean = true
): Promise<boolean> {
  try {
    // Vérifier la progression du cours (doit être à 100%)
    const progress = await getCourseProgress(userId, courseId);
    if (!progress || progress.percent_complete < 100) {
      return false;
    }

    // Si un quiz est requis, vérifier qu'il a été réussi
    if (requiresQuiz) {
      const quizResult = await getQuizResult(userId, courseId);
      if (!quizResult || !quizResult.passed) {
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error('Error checking certificate eligibility:', error);
    return false;
  }
}

// Helper: Save certificate
export async function saveCertificate(
  certificateId: string,
  userId: string,
  courseId: string,
  courseName: string,
  userName: string,
  verifyCode: string,
  pdfUrl?: string
): Promise<Certificate | null> {
  try {
    const certRef = doc(db, 'certificates', certificateId);

    const certData: Certificate = {
      certificate_id: certificateId,
      user_id: userId,
      course_id: courseId,
      course_name: courseName,
      user_name: userName,
      issued_at: new Date().toISOString(),
      verify_code: verifyCode,
      pdf_url: pdfUrl || null,
      is_valid: true,
    };

    await setDoc(certRef, certData);

    return certData;
  } catch (error) {
    console.error('Error saving certificate:', error);
    return null;
  }
}

// Helper: Get user's certificates
export async function getUserCertificates(userId: string): Promise<Certificate[]> {
  try {
    const certificatesRef = collection(db, 'certificates');
    const q = query(
      certificatesRef,
      where('user_id', '==', userId),
      orderBy('issued_at', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const certificates: Certificate[] = [];

    querySnapshot.forEach((doc) => {
      certificates.push(doc.data() as Certificate);
    });

    return certificates;
  } catch (error) {
    console.error('Error fetching certificates:', error);
    return [];
  }
}

// Helper: Verify certificate by code
export async function verifyCertificate(verifyCode: string): Promise<Certificate | null> {
  try {
    const certificatesRef = collection(db, 'certificates');
    const q = query(
      certificatesRef,
      where('verify_code', '==', verifyCode),
      where('is_valid', '==', true)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    return querySnapshot.docs[0].data() as Certificate;
  } catch (error) {
    console.error('Error verifying certificate:', error);
    return null;
  }
}
