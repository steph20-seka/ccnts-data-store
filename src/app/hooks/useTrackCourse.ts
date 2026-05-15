import { useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface CourseInfo {
  courseId: string;
  courseName: string;
  courseSlug: string;
}

interface CourseProgress {
  courseId: string;
  courseName: string;
  courseSlug: string;
  startedAt: string;
  completed: boolean;
  completedAt?: string;
  hasCertificate?: boolean;
}

export function useTrackCourse(courseInfo: CourseInfo) {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Charger la progression actuelle
      const progressKey = `ccnts_courses_${user.id}`;
      const progressData = localStorage.getItem(progressKey);
      const currentProgress: CourseProgress[] = progressData ? JSON.parse(progressData) : [];

      // Vérifier si le cours est déjà dans la progression
      const courseExists = currentProgress.some(
        (course) => course.courseId === courseInfo.courseId
      );

      // Si le cours n'existe pas, l'ajouter
      if (!courseExists) {
        const newCourseProgress: CourseProgress = {
          courseId: courseInfo.courseId,
          courseName: courseInfo.courseName,
          courseSlug: courseInfo.courseSlug,
          startedAt: new Date().toISOString(),
          completed: false,
        };

        const updatedProgress = [...currentProgress, newCourseProgress];
        localStorage.setItem(progressKey, JSON.stringify(updatedProgress));
      }
    }
  }, [user, courseInfo.courseId, courseInfo.courseName, courseInfo.courseSlug]);
}
