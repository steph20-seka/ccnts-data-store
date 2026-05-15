import { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { 
  CheckCircle2, XCircle, Award, AlertCircle, RefreshCw, BookOpen, 
  TrendingUp, Target, AlertTriangle, Clock, ChevronRight, ChevronLeft
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner@2.0.3';
import { CertificateGenerator } from '../CertificateGenerator';
import { Progress } from '../ui/progress';

export type QuestionType = 'single' | 'multiple' | 'truefalse' | 'shortanswer' | 'case';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface AdvancedQuestion {
  id: number;
  type: QuestionType;
  difficulty: DifficultyLevel;
  question: string;
  options?: string[];
  correctAnswer: number | number[] | boolean | string;
  explanation: string;
  category?: string;
  caseSituation?: string; // Pour les questions de cas pratiques
}

interface AdvancedCourseQuizProps {
  courseId: string;
  courseTitle: string;
  questions: AdvancedQuestion[];
  passingScore: number; // Pourcentage requis (75-80)
  maxAttempts: number; // Nombre de tentatives max (2-3)
  timeLimit?: number; // En minutes (optionnel)
}

export function AdvancedCourseQuiz({
  courseId,
  courseTitle,
  questions,
  passingScore,
  maxAttempts,
  timeLimit,
}: AdvancedCourseQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<any[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit ? timeLimit * 60 : null);
  const [isReviewing, setIsReviewing] = useState(false);
  const [weakCategories, setWeakCategories] = useState<string[]>([]);
  const { user } = useAuth();

  // Timer
  useEffect(() => {
    if (!timeRemaining || showResults) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev && prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev ? prev - 1 : null;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, showResults]);

  const handleAnswer = (answer: any) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    let correctCount = 0;
    const categoryScores: { [key: string]: { correct: number; total: number } } = {};

    questions.forEach((q, index) => {
      const userAnswer = answers[index];
      let isCorrect = false;

      switch (q.type) {
        case 'single':
        case 'truefalse':
          isCorrect = userAnswer === q.correctAnswer;
          break;
        case 'multiple':
          const correctAnswers = q.correctAnswer as number[];
          isCorrect = Array.isArray(userAnswer) && 
            userAnswer.length === correctAnswers.length &&
            userAnswer.every((a: number) => correctAnswers.includes(a));
          break;
        case 'shortanswer':
          const correctText = (q.correctAnswer as string).toLowerCase().trim();
          const userText = (userAnswer || '').toLowerCase().trim();
          isCorrect = correctText === userText;
          break;
        case 'case':
          isCorrect = userAnswer === q.correctAnswer;
          break;
      }

      if (isCorrect) correctCount++;

      // Tracker par catégorie
      if (q.category) {
        if (!categoryScores[q.category]) {
          categoryScores[q.category] = { correct: 0, total: 0 };
        }
        categoryScores[q.category].total++;
        if (isCorrect) categoryScores[q.category].correct++;
      }
    });

    // Identifier les catégories faibles (< 60%)
    const weak = Object.entries(categoryScores)
      .filter(([_, scores]) => (scores.correct / scores.total) < 0.6)
      .map(([category]) => category);

    setWeakCategories(weak);

    return {
      correctCount,
      totalQuestions: questions.length,
      scorePercentage: Math.round((correctCount / questions.length) * 100),
      categoryScores,
    };
  };

  const handleSubmit = () => {
    const unansweredCount = answers.filter(a => a === null || a === undefined).length;
    
    if (unansweredCount > 0) {
      toast.error(`Il reste ${unansweredCount} question(s) sans réponse`, {
        description: 'Répondez à toutes les questions avant de soumettre',
      });
      return;
    }

    setAttemptCount(attemptCount + 1);
    setShowResults(true);
  };

  const handleRetry = () => {
    if (attemptCount >= maxAttempts) {
      toast.error('Nombre maximum de tentatives atteint', {
        description: `Vous avez utilisé vos ${maxAttempts} tentatives. Révisez le cours et revenez plus tard.`,
      });
      return;
    }

    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
    setIsReviewing(false);
    setTimeRemaining(timeLimit ? timeLimit * 60 : null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const results = calculateResults();
    const passed = results.scorePercentage >= passingScore;

    return (
      <div className="space-y-6">
        {/* Résultat principal */}
        <Card className={`p-8 ${passed ? 'bg-gradient-to-br from-green-50 to-emerald-50' : 'bg-gradient-to-br from-orange-50 to-red-50'}`}>
          <div className="text-center mb-6">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${
              passed ? 'bg-green-100' : 'bg-orange-100'
            }`}>
              {passed ? (
                <Award className="w-12 h-12 text-green-600" />
              ) : (
                <AlertCircle className="w-12 h-12 text-orange-600" />
              )}
            </div>
            
            <h2 className="text-3xl font-bold mb-2">
              {passed ? '🎉 Félicitations !' : '📚 Continuez vos efforts'}
            </h2>
            
            <p className="text-xl text-gray-700 mb-4">
              {passed 
                ? 'Vous avez réussi le quiz !' 
                : 'Le score minimum n\'est pas atteint'}
            </p>

            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600">Score obtenu</p>
                <p className={`text-4xl font-bold ${passed ? 'text-green-600' : 'text-orange-600'}`}>
                  {results.scorePercentage}%
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Score requis</p>
                <p className="text-2xl font-bold text-gray-700">{passingScore}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Questions réussies</p>
                <p className="text-2xl font-bold text-blue-600">
                  {results.correctCount}/{results.totalQuestions}
                </p>
              </div>
            </div>

            {/* Tentatives restantes */}
            <div className="bg-white rounded-lg p-4 mb-4 border-2 border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Tentatives : {attemptCount}/{maxAttempts}
              </p>
              <Progress value={(attemptCount / maxAttempts) * 100} className="h-2" />
            </div>
          </div>

          {/* Catégories faibles */}
          {!passed && weakCategories.length > 0 && (
            <div className="bg-white rounded-xl p-6 mb-6 border-2 border-orange-300">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">Chapitres à réviser</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Concentrez-vous sur ces sections avant de retenter le quiz :
              </p>
              <div className="space-y-2">
                {weakCategories.map((category, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                    <BookOpen className="w-5 h-5 text-orange-600" />
                    <span className="font-medium text-gray-900">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setIsReviewing(true)}
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Revoir mes réponses
            </Button>

            {!passed && attemptCount < maxAttempts && (
              <Button
                onClick={handleRetry}
                size="lg"
                className="bg-orange-600 hover:bg-orange-700"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Retenter ({maxAttempts - attemptCount} restantes)
              </Button>
            )}

            {passed && (
              <Button
                onClick={() => {}}
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                <Award className="w-5 h-5 mr-2" />
                Obtenir mon certificat
              </Button>
            )}
          </div>
        </Card>

        {/* Certificat si réussi */}
        {passed && user && (
          <CertificateGenerator
            recipientName={user.fullName || user.email}
            courseName={courseTitle}
            completionDate={new Date().toLocaleDateString('fr-FR')}
            certificateId={`CCNTS-${courseId.toUpperCase()}-${Date.now()}`}
            language="fr"
          />
        )}

        {/* Review des réponses */}
        {isReviewing && (
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">📝 Révision détaillée</h3>
            <div className="space-y-6">
              {questions.map((q, idx) => {
                const userAnswer = answers[idx];
                let isCorrect = false;

                // Vérifier si correct
                switch (q.type) {
                  case 'single':
                  case 'truefalse':
                  case 'case':
                    isCorrect = userAnswer === q.correctAnswer;
                    break;
                  case 'multiple':
                    const correctAnswers = q.correctAnswer as number[];
                    isCorrect = Array.isArray(userAnswer) && 
                      userAnswer.length === correctAnswers.length &&
                      userAnswer.every((a: number) => correctAnswers.includes(a));
                    break;
                  case 'shortanswer':
                    const correctText = (q.correctAnswer as string).toLowerCase().trim();
                    const userText = (userAnswer || '').toLowerCase().trim();
                    isCorrect = correctText === userText;
                    break;
                }

                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-xl border-2 ${
                      isCorrect 
                        ? 'bg-green-50 border-green-300' 
                        : 'bg-red-50 border-red-300'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-gray-600">
                            Question {idx + 1}
                          </span>
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            q.difficulty === 'easy' ? 'bg-green-200 text-green-800' :
                            q.difficulty === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                            'bg-red-200 text-red-800'
                          }`}>
                            {q.difficulty === 'easy' ? 'Facile' : q.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-gray-900 mb-3">{q.question}</p>
                        
                        {/* Explication */}
                        <div className={`p-4 rounded-lg ${
                          isCorrect ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          <p className="font-semibold text-gray-900 mb-2">
                            {isCorrect ? '✓ Bonne réponse !' : '✗ Réponse incorrecte'}
                          </p>
                          <p className="text-gray-700">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}
      </div>
    );
  }

  // Interface du quiz
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const answeredCount = answers.filter(a => a !== null && a !== undefined).length;

  return (
    <div className="space-y-6">
      {/* Header avec progression */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              Question {currentQuestion + 1} sur {questions.length}
            </h3>
            <p className="text-sm text-gray-600">
              {answeredCount} réponse(s) complétée(s)
            </p>
          </div>
          
          {timeRemaining !== null && (
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              timeRemaining < 300 ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
            }`}>
              <Clock className="w-5 h-5" />
              <span className="font-bold text-lg">{formatTime(timeRemaining)}</span>
            </div>
          )}
        </div>
        
        <Progress value={progress} className="h-3" />
        
        <div className="flex items-center gap-2 mt-4">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          <p className="text-sm text-gray-700">
            Tentative {attemptCount + 1}/{maxAttempts} • Score requis : {passingScore}%
          </p>
        </div>
      </Card>

      {/* Question */}
      <Card className="p-8">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${
              question.difficulty === 'easy' ? 'bg-green-200 text-green-800' :
              question.difficulty === 'medium' ? 'bg-yellow-200 text-yellow-800' :
              'bg-red-200 text-red-800'
            }`}>
              {question.difficulty === 'easy' ? '🟢 Facile' : 
               question.difficulty === 'medium' ? '🟡 Moyen' : '🔴 Difficile'}
            </span>
            
            <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-blue-100 text-blue-800">
              {question.type === 'single' ? 'Choix unique' :
               question.type === 'multiple' ? 'Choix multiples' :
               question.type === 'truefalse' ? 'Vrai/Faux' :
               question.type === 'shortanswer' ? 'Réponse courte' :
               'Cas pratique'}
            </span>
          </div>

          {question.caseSituation && (
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-sm font-semibold text-yellow-900 mb-2">📋 Situation :</p>
              <p className="text-gray-800">{question.caseSituation}</p>
            </div>
          )}

          <h3 className="text-2xl font-bold text-gray-900 mb-6">{question.question}</h3>

          {/* Options selon le type */}
          <div className="space-y-3">
            {question.type === 'single' && question.options && (
              question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === idx
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === idx
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-400'
                    }`}>
                      {answers[currentQuestion] === idx && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-900 font-medium">{option}</span>
                  </div>
                </button>
              ))
            )}

            {question.type === 'multiple' && question.options && (
              question.options.map((option, idx) => {
                const selected = Array.isArray(answers[currentQuestion]) && 
                  answers[currentQuestion].includes(idx);
                
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      const current = Array.isArray(answers[currentQuestion]) 
                        ? answers[currentQuestion] 
                        : [];
                      const newAnswer = selected
                        ? current.filter((i: number) => i !== idx)
                        : [...current, idx];
                      handleAnswer(newAnswer);
                    }}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selected
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        selected
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-400'
                      }`}>
                        {selected && <CheckCircle2 className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-gray-900 font-medium">{option}</span>
                    </div>
                  </button>
                );
              })
            )}

            {question.type === 'truefalse' && (
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleAnswer(true)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === true
                      ? 'border-green-600 bg-green-50'
                      : 'border-gray-300 hover:border-green-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-center">
                    <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-600" />
                    <span className="text-xl font-bold text-gray-900">Vrai</span>
                  </div>
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === false
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-300 hover:border-red-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="text-center">
                    <XCircle className="w-8 h-8 mx-auto mb-2 text-red-600" />
                    <span className="text-xl font-bold text-gray-900">Faux</span>
                  </div>
                </button>
              </div>
            )}

            {question.type === 'shortanswer' && (
              <div>
                <input
                  type="text"
                  value={answers[currentQuestion] || ''}
                  onChange={(e) => handleAnswer(e.target.value)}
                  placeholder="Entrez votre réponse..."
                  className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-lg"
                />
                <p className="text-sm text-gray-600 mt-2">
                  💡 Réponse courte attendue (quelques mots)
                </p>
              </div>
            )}

            {question.type === 'case' && question.options && (
              question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-5 rounded-lg border-2 transition-all ${
                    answers[currentQuestion] === idx
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-300 hover:border-purple-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mt-1 flex-shrink-0 ${
                      answers[currentQuestion] === idx
                        ? 'border-purple-600 bg-purple-600'
                        : 'border-gray-400'
                    }`}>
                      {answers[currentQuestion] === idx && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium leading-relaxed">{option}</p>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t-2">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            size="lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Précédent
          </Button>

          {currentQuestion === questions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              Soumettre le quiz
              <CheckCircle2 className="w-5 h-5 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
            >
              Suivant
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}