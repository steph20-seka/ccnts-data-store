import { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { AlertTriangle, RotateCcw, BookOpen, XCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router';

interface QuizAttemptTrackerProps {
  courseId: string;
  courseName: string;
  maxAttempts: number;
  currentAttempt: number;
  onResetAttempts?: () => void;
  courseLink: string;
}

export function QuizAttemptTracker({
  courseId,
  courseName,
  maxAttempts,
  currentAttempt,
  onResetAttempts,
  courseLink,
}: QuizAttemptTrackerProps) {
  const attemptsRemaining = maxAttempts - currentAttempt;
  const isLastAttempt = attemptsRemaining === 1;
  const noAttemptsLeft = attemptsRemaining <= 0;

  return (
    <Card className={`p-6 border-l-4 ${
      noAttemptsLeft 
        ? 'border-red-600 bg-red-50' 
        : isLastAttempt 
        ? 'border-orange-600 bg-orange-50' 
        : 'border-blue-600 bg-blue-50'
    }`}>
      <div className="flex items-start gap-4">
        {noAttemptsLeft ? (
          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        ) : isLastAttempt ? (
          <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
        ) : (
          <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
        )}
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {noAttemptsLeft 
              ? '❌ Nombre maximum de tentatives atteint' 
              : isLastAttempt 
              ? '⚠️ Dernière tentative !' 
              : '📝 Tentatives de certification'
            }
          </h3>
          
          <p className="text-gray-700 mb-3">
            {noAttemptsLeft ? (
              <>
                Vous avez utilisé toutes vos tentatives ({maxAttempts}/{maxAttempts}). 
                Pour débloquer de nouvelles tentatives, veuillez revoir le cours attentivement.
              </>
            ) : (
              <>
                Tentative {currentAttempt} sur {maxAttempts} utilisée(s). 
                Il vous reste <strong className={isLastAttempt ? 'text-orange-700' : 'text-blue-700'}>
                  {attemptsRemaining} tentative{attemptsRemaining > 1 ? 's' : ''}
                </strong>.
              </>
            )}
          </p>

          {isLastAttempt && !noAttemptsLeft && (
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-3">
              <p className="text-sm text-orange-900 font-semibold">
                ⚠️ Attention : C'est votre dernière chance !
              </p>
              <p className="text-sm text-orange-800 mt-1">
                Assurez-vous d'avoir bien révisé tout le cours avant de commencer.
              </p>
            </div>
          )}

          {noAttemptsLeft && (
            <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-3">
              <p className="text-sm font-semibold text-red-900 mb-2">
                📚 Recommandations pour progresser :
              </p>
              <ul className="text-sm text-red-800 space-y-1 ml-4 list-disc">
                <li>Relisez attentivement tous les modules du cours</li>
                <li>Prenez des notes sur les points clés</li>
                <li>Testez les exemples pratiques fournis</li>
                <li>Identifiez vos zones de faiblesse</li>
              </ul>
            </div>
          )}

          <div className="flex gap-3 mt-4">
            <Button asChild variant="outline" className="gap-2">
              <Link to={courseLink}>
                <BookOpen className="w-4 h-4" />
                Revoir le cours
              </Link>
            </Button>
            
            {noAttemptsLeft && onResetAttempts && (
              <Button 
                onClick={onResetAttempts}
                variant="default"
                className="gap-2 bg-green-600 hover:bg-green-700"
              >
                <RotateCcw className="w-4 h-4" />
                Débloquer après révision
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

// Hook pour gérer les tentatives de quiz
export function useQuizAttempts(courseId: string, maxAttempts: number = 3) {
  const [attempts, setAttempts] = useState(0);
  const [scores, setScores] = useState<number[]>([]);

  useEffect(() => {
    // Charger depuis localStorage
    const savedAttempts = localStorage.getItem(`quiz_attempts_${courseId}`);
    const savedScores = localStorage.getItem(`quiz_scores_${courseId}`);
    
    if (savedAttempts) {
      setAttempts(parseInt(savedAttempts, 10));
    }
    if (savedScores) {
      setScores(JSON.parse(savedScores));
    }
  }, [courseId]);

  const recordAttempt = (score: number) => {
    const newAttempts = attempts + 1;
    const newScores = [...scores, score];
    
    setAttempts(newAttempts);
    setScores(newScores);
    
    localStorage.setItem(`quiz_attempts_${courseId}`, newAttempts.toString());
    localStorage.setItem(`quiz_scores_${courseId}`, JSON.stringify(newScores));
  };

  const resetAttempts = () => {
    setAttempts(0);
    setScores([]);
    localStorage.removeItem(`quiz_attempts_${courseId}`);
    localStorage.removeItem(`quiz_scores_${courseId}`);
  };

  const canAttempt = attempts < maxAttempts;
  const attemptsRemaining = maxAttempts - attempts;
  const bestScore = scores.length > 0 ? Math.max(...scores) : 0;

  return {
    attempts,
    scores,
    canAttempt,
    attemptsRemaining,
    bestScore,
    recordAttempt,
    resetAttempts,
  };
}
